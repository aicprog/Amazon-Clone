import cart from '../assets/cart2.svg';

export const headerLinks = [
	{
		id: 0,
		topName: 'Returns',
		bottomName: '& Orders',
		href: '/orders',
	},

	{
		id: 1,
		topName: '',
		bottomName: '',
		icon: cart,
		prop: 'Cart',
		href: '/checkout',
	},
];
