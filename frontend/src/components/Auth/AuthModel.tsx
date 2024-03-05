"use client";
import { useAuth } from "@/context/AuthProvider";
import React, { useState } from "react";
import { Wallet, validateMnemonic } from "js-moi-sdk";
import { truncateStr } from "./truncateStr";
import { account, provider } from "@/constants/auth";

const AuthModel = () => {
	const {
		mnemonic,
		setMnemonic,
		setWallet,
		wallet,
		showConnectModal,
		setShowConnectModal,
	} = useAuth();
	const [error, setError] = useState("");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleMnemonicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMnemonic(e.target.value);
	};

	const handleConnect = async () => {
		try {
			if (!validateMnemonic(mnemonic)) {
				setError("Incorrect mnemonic");
				return;
			}

			const newWallet = await Wallet.fromMnemonic(mnemonic, account);
			newWallet.connect(provider);
			setWallet(newWallet);
			localStorage.setItem(
				"loggedIn",
				JSON.stringify({ wallet: newWallet, mnemonic })
			);
			setError("");
			setShowConnectModal(false);
			setMnemonic("");
		} catch (error) {
			console.error("Error connecting wallet:", error);
			setError("Error connecting wallet");
		}
	};

	const handleDisconnect = () => {
		setWallet(null);
		localStorage.removeItem("loggedIn");
		alert("Wallet disconnected");
	};

	return (
		<>
			<div className="px-4">
				{wallet ? (
					<div className="relative">
						<button
							className="bg-[#0085FF] p-3 rounded-lg text-white font-medium w-30"
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						>
							{truncateStr(wallet.getAddress(), 15)}
						</button>
						{isDropdownOpen && (
							<div className="absolute top-10 right-0 bg-white p-3 rounded-lg shadow-lg">
								<button className="text-red-400" onClick={handleDisconnect}>
									Disconnect
								</button>
							</div>
						)}
					</div>
				) : (
					<button
						className="bg-[#0085FF] p-2 rounded-lg text-white font-medium"
						onClick={() => setShowConnectModal(true)}
					>
						Connect
					</button>
				)}
				{showConnectModal && (
					<div className="fixed inset-0 flex flex-col items-center justify-start py-36 bg-black bg-opacity-90 space-y-40 z-50">
						<button
							type="button"
							className="font-bold text-2xl text-white"
							onClick={() => setShowConnectModal(false)}
						>
							✕
						</button>
						<form className="mt-5 flex flex-col space-y-10 sm:items-center">
							<div className="w-full">
								<label htmlFor="mnemonic" className="sr-only">
									Authenticate
								</label>
								<input
									type="text"
									name="mnemonic"
									id="mnemonic"
									value={mnemonic}
									onChange={handleMnemonicChange}
									className="p-2 rounded-xl outline-blue-500 active:border-blue-300 border-2 w-full"
									placeholder="abba jabba dabba abba jabba dabba"
								/>
							</div>
							<button
								type="button"
								onClick={handleConnect}
								disabled={
									!mnemonic || error !== "" || mnemonic.split(" ").length < 12
								}
								className="rounded-md bg-cyan-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:ml-3 sm:mt-0  glow-on-hover"
							>
								Connect
							</button>
						</form>
					</div>
				)}
			</div>
		</>
	);
};

export default AuthModel;
