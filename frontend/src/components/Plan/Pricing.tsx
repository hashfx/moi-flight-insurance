'use client';
import { CheckIcon } from "@heroicons/react/20/solid";
import { PlanDetail } from "@/types/pricing";
import { useAuth } from "@/context/AuthProvider";
import logic from "@/interface/logic";
import TokenModal from "@/containers/components/TokenModal";
import { useEffect, useState } from "react";

const frequencies = {
	value: "monthly",
	label: "Monthly",
	priceSuffix: "/month",
};

const tiers = [
	{
		name: "Starter",
		id: "tier-starter",
		href: "#",
		price: { monthly: "₹399" },
		features: [
			"Personal Dashboard",
			"Real time settlement",
			"Insurance of upto ₹4000 ",
		],
		mostPopular: false,
		priceInNumber: 399,
	},
	{
		name: "Premium",
		id: "tier-premium",
		href: "#",
		price: { monthly: "₹699" },
		features: [
			"Personal Dashboard",
			"Priority Customer Service",
			"Insurance of upto ₹7000",
		],
		mostPopular: true,
		priceInNumber: 699,
	},
	{
		name: "Enterprise",
		id: "tier-enterprise",
		href: "#",
		price: { monthly: "₹799" },
		features: [
			"Priority Claim Settlement",
			"Priority Customer Service",
			"Insurance for upto ₹8000",
		],
		mostPopular: false,
		priceInNumber: 799,
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const Pricing = () => {
	const { wallet, setOpenClaimModal, openClaimModal, balance, setSelectedPlans} = useAuth();
	const handlePlans = async (plan: PlanDetail) => {
		setOpenClaimModal(true);
		setSelectedPlans(plan);
	}
	return (
		<>
		<div className="pt-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h1 className="text-4xl font-semibold">Plans</h1>
				<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{tiers.map((tier: PlanDetail) => (
						<div
							key={tier.id}
							className={classNames(
								tier.mostPopular
									? "bg-white/5 ring-2 ring-Secondary"
									: "ring-1 ring-white/10",
								"rounded-3xl p-8 xl:p-10"
							)}
						>
							<div className="flex items-center justify-between gap-x-4">
								<h3
									id={tier.id}
									className="text-lg font-semibold leading-8 text-white"
								>
									{tier.name}
								</h3>
								{tier.mostPopular ? (
									<p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
										Most popular
									</p>
								) : null}
							</div>
							<p className="mt-6 flex items-baseline gap-x-1">
								<span className="text-4xl font-bold tracking-tight text-white">
									{tier.price.monthly}
								</span>
								<span className="text-sm font-semibold leading-6 text-gray-300">
									{frequencies.priceSuffix}
								</span>
							</p>
							<button
								aria-describedby={tier.id}
								onClick={() => handlePlans(tier)}
								className={classNames(
									tier.mostPopular
										? "bg-Primary text-white shadow-sm hover:bg-Secondary focus-visible:outline-Secondary"
										: "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
									"mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full"
								)}
							>
								Buy plan
							</button>
							<ul
								role="list"
								className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
							>
								{tier.features.map((feature) => (
									<li key={feature} className="flex gap-x-3">
										<CheckIcon
											className="h-6 w-5 flex-none text-white"
											aria-hidden="true"
										/>
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
			{openClaimModal && (
				<div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
					<TokenModal/>
				</div>
			)}
			</>
	);
};

export default Pricing;
