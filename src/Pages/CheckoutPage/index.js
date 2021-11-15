import React from 'react';
import { CheckoutBasket, CheckoutSubtotal } from '../../Components';
import ad from '../../assets/ad2.png';

import './CheckoutPage.css';

const CheckoutPage = () => {
	return (
		<div className="checkout">
			<div className="checkout-left">
				<img
					src={ad}
					alt="checkout ad"
					className="checkout-ad"
				/>
				<CheckoutBasket />
			</div>

			<div className="checkout-right">
				<CheckoutSubtotal />
			</div>
		</div>
	);
};

export default CheckoutPage;
