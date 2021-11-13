import React from 'react';
import './CheckoutSubtotal.css';


const CheckoutSubtotal = () => {
	return (
		<div className="subtotal">
			<p>Subtotal (0: item):</p>
			<small className="subtotal-gift">
				<input type="checkbox" />
				<span>This order contains a gift</span>
			</small>
            <button className="proceed-to-checkout">
                Proceed To Checkout
            </button>
		</div>
	);
};

export default CheckoutSubtotal;
