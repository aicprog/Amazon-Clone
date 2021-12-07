import { GiHamburgerMenu } from 'react-icons/gi';
export const categories = [
	{
		id: 0,
		name: 'All',
		icon: <GiHamburgerMenu />,
		href: '',
	},
	{
		id: 1,
		name: 'Electronics',
		href: '/categories/electronics',
	},
	{
		id: 2,
		name: 'Jewelry',
		href: '/categories/jewelry',
	},
	{
		id: 3,
		name: "Men's Clothing",
		href: '/categories/mens',
	},
	{
		id: 4,
		name: "Women's Clothing",
		href: '/categories/womens',
	},
];
