export type Tiers = {
	name: string;
	id: string;
	href: string;
	price: {
		monthly: string;
	};
	description: string;
	features: string[];
	mostPopular: boolean;
};
