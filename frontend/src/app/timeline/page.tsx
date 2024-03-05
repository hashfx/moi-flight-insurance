import Breakdown from "@/components/Dashboard/Breakdown";
import React from "react";

const breakdown = [
	{
		transectionStatus: "Deposit",
		token: "100",
	},
	{
		transectionStatus: "Withdraw",
		token: "50",
	},
	{
		transectionStatus: "Deposit",
		token: "100",
	},
	{
		transectionStatus: "Withdraw",
		token: "50",
	},
];

const timeline = () => {
	return (
		<div>
			{breakdown.map((item, id) => (
				<Breakdown
					key={id}
					transectionStatus={item.transectionStatus}
					token={item.token}
					endpoint={breakdown}
					id={id}
				/>
			))}
		</div>
	);
};

export default timeline;
