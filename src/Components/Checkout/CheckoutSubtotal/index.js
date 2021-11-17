import React from 'react';
import { useProductsContext } from '../../../Context/products.context';
import './CheckoutSubtotal.css';

const CheckoutSubtotal = () => {
	const { totalAmount, totalCartQuantity } = useProductsContext();
	return (
		<div className="subtotal">
			<p>
				Subtotal ({totalCartQuantity} items):{' '}
				<strong>${Math.round(totalAmount * 100) / 100} </strong>
			</p>
			<small className="subtotal-gift">
				<input type="checkbox" />
				<span>This order contains a gift</span>
			</small>
			<button className="proceed-to-checkout">Proceed To Checkout</button>
		

		
		</div>
	);
};

export default CheckoutSubtotal;
