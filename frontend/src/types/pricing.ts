export type Tiers = {
	name: string;
	id: string;
	href: string;
	price: {
		monthly: string;
		annually: string;
	};
	description: string;
	features: string[];
	mostPopular: boolean;
};

export type Frequency = {
	value: string;
	label: string;
	priceSuffix: string;
};
