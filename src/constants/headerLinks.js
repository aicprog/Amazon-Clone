import cart from '../assets/cart2.svg';

export const headerLinks = [
	{
		id: 0,
		topName: 'Hello',
		bottomName: 'Sign in',
		href: '/login',
	},
	{
		id: 1,
		topName: 'Returns',
		bottomName: '& Orders',
		href: '',
	},
	{
		id: 2,
		topName: 'Your',
		bottomName: 'Prime',
		href: '',
	},
	{
		id: 3,
		topName: '',
		bottomName: '',
		// icon: <RiShoppingCartLine />,
		icon: cart,
		className: 'header-basket-count',
		prop: 'Cart',
		href: '/checkout',
	},
];
