import Image from "next/image";

interface details {
	transectionStatus: string;
	token: string;
}

interface Breakdown {
	token: string;
	transectionStatus: string;
	endpoint: details[];
	id: number;
}

const Breakdown = ({ token, transectionStatus, endpoint, id }: Breakdown) => {
	const last = id === endpoint.length - 1;
	return (
		<div className={`relative ${!last && "pb-20"}`}>
			<span
				className={`${
					last && "hidden"
				} absolute top-20 left-9 -ml-px h-[30%] w-0.5 bg-gray-200`}
				aria-hidden="true"
			></span>
			<div className="relative flex items-start space-x-3">
				<div>
					<div className="relative px-1">
						<div className="h-16 w-16 bg-white rounded-full  flex items-center justify-center">
							<Image src="/moilogo.png" alt="icon" width={50} height={50} />
						</div>
					</div>
				</div>
				<div className="min-w-0 flex-1 py-3">
					<div className="text-md text-Lighter">
						<div>
							<div className="font-bold text-white mr-2">
								{transectionStatus}
							</div>
						</div>
						<span className="whitespace-nowrap text-sm text-white/90">
							{token} MOI
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Breakdown;
