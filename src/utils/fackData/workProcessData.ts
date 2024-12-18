type DataType = {
	id: number;
	title: string;
	img: string;
	description: string;
	icon: string;
}[];

export const workProcessData: DataType = [
	{
		id: 1,
		title: "Subscribe",
		img: "/images/shapes/workprocess-shape1.png",
		icon: "ri-shake-hands-line",
		description:
			"Select your plan that fits your needs, get access to Trello board within 24 hours, and start listing your requests.",
	},
	{
		id: 2,
		title: "Receive",
		img: "/images/shapes/workprocess-shape2.png",
		icon: "ri-global-fill",
		description:
			"Submit your design requests through our Trello board, get assigned to a dedicated designer within 24 hours, and track the progress of your project in real-time.",
	},
	{
		id: 3,
		title: "Continue",
		img: "/images/shapes/workprocess-shape1.png",
		icon: "ri-stack-line",
		description:
			"Get your design files delivered within 24-48 hours, review and provide feedback through our Trello board, and receive unlimited revisions until you're satisfied with the final result.",
	},
];
