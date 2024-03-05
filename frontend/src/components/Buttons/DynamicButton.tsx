import { Button } from "@/types/button";
import React from "react";

const DynamicButton = ({ buttonText, handle }: Button) => {
	return (
		<button
			className="w-button p-button bg-Primary border border-Secondary rounded-lg text-xl font-medium text-white"
			onClick={handle}
		>
			{buttonText}
		</button>
	);
};

export default DynamicButton;
