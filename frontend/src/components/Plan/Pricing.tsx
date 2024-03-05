"use client";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Frequency, Tiers } from "@/types/pricing";

const frequencies = [
	{ value: "monthly", label: "Monthly", priceSuffix: "/month" },
	{ value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
	{
		name: "Starter",
		id: "tier-starter",
		href: "#",
		price: { monthly: "₹399", annually: "₹3199" },
		description: "A Plan that’s perfect for common people and their families.",
		features: [
			"Personal Dashboard",
			"Real time settlement",
			"Insurance of upto ₹3000 ",
		],
		mostPopular: false,
	},
	{
		name: "Premium",
		id: "tier-premium",
		href: "#",
		price: { monthly: "₹699", annually: "₹7999" },
		description: "A plan that scales with your rapidly growing business.",
		features: [
			"Personal Dashboard",
			"Priority Customer Service",
			"Insurance of upto ₹5000",
		],
		mostPopular: true,
	},
	{
		name: "Enterprise",
		id: "tier-enterprise",
		href: "#",
		price: { monthly: "₹799", annually: "₹9199" },
		description: "Dedicated support and infrastructure for your company.",
		features: [
			"Priority Claim Settlement",
			"Priority Customer Service",
			"Insurance for upto ₹8000",
		],
		mostPopular: false,
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const Pricing = () => {
	const [frequency, setFrequency] = useState<Frequency>(frequencies[0]);

	return (
		<div className="pt-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
						Pricing Plans For Everyone
					</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
					Choose an affordable plan that’s packed with the features you need.
					Let us help you find the right plan for your business.
				</p>
				<div className="mt-16 flex justify-center">
					<RadioGroup
						value={frequency}
						onChange={setFrequency}
						className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
					>
						<RadioGroup.Label className="sr-only">
							Payment frequency
						</RadioGroup.Label>
						{frequencies.map((option) => (
							<RadioGroup.Option
								key={option.value}
								value={option}
								className={({ checked }: { checked: boolean }) =>
									classNames(
										checked ? "bg-Secondary" : "",
										"cursor-pointer rounded-full px-2.5 py-1"
									)
								}
							>
								<span>{option.label}</span>
							</RadioGroup.Option>
						))}
					</RadioGroup>
				</div>
				<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{tiers.map((tier: Tiers) => (
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
							<p className="mt-4 text-sm leading-6 text-gray-300">
								{tier.description}
							</p>
							<p className="mt-6 flex items-baseline gap-x-1">
								<span className="text-4xl font-bold tracking-tight text-white">
									{tier.price[frequency.value as keyof typeof tier.price]}
								</span>
								<span className="text-sm font-semibold leading-6 text-gray-300">
									{frequency.priceSuffix}
								</span>
							</p>
							<button
								aria-describedby={tier.id}
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
	);
};

export default Pricing;
