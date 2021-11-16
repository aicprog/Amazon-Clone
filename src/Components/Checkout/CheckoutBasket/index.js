import React from 'react';
import { useProductsContext } from '../../../Context/products.context';
import { CheckoutItem } from '../../../Components';
import './CheckoutBasket.css';

const CheckoutBasket = () => {
	const { cart } = useProductsContext();

	return (
		<div className="checkout-basket-container">
			<h2 className="checkout-title">Your Shopping Basket</h2>

			<div className="columns">Price</div>
			<hr />
			{/* Cart Items */}
			{cart.map((product) => (
				<CheckoutItem key={product.id} product={product} />
			))}
		</div>
	);
};

export default CheckoutBasket;
