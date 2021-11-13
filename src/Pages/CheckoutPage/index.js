import React from 'react';
import { CheckoutBasket, CheckoutSubtotal } from '../../Components';
import { useProductsContext } from '../../Context/products.context';
import './CheckoutPage.css';

const CheckoutPage = () => {
	const {basket} = useProductsContext()
	console.log(basket)
	return (
		<div className="checkout">
			<div className="checkout-left">
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt="checkout ad"
					className="checkout-ad"
				/>
				<CheckoutBasket />
			</div>

			<div className="checkout-right">
				<CheckoutSubtotal/>
			</div>
		</div>
	);
};

export default CheckoutPage;
