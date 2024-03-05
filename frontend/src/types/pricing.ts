export type Tiers = {
	name: string;
	id: string;
	href: string;
	price: {
		monthly: string;
	};
	features: string[];
	mostPopular: boolean;
};
