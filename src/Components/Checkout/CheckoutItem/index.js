import React, { useState } from 'react';
import './CheckoutItem.css';
import prime from '../../../assets/prime.png';

const CheckoutItem = ({ product }) => {
	const { title, img, price } = product;
	const [amount, setAmount] = useState(0);

	const handleChange = (e) => {
		setAmount(e.target.value);
	};

	return (
		<div className="checkout-item-container">
			<div className="checkout-item-info">
				<img src={img} alt={title} className="checkout-item-img" />
				<div className="checkout-item-inner-info">
					<strong className="checkout-item-title">{title}</strong>
					<small className="stock-message">In Stock</small>
					<img src={prime} alt="" className="prime-img" />
					<div className="gift-input">
						<input
							id="checkbox-gift"
							class="checkbox-gift"
							name="checkbox-gift"
							type="checkbox"
						/>
						<small>This is a gift</small>
					</div>
					<div className="product-amount-changes">
						<div class="product-amount-dropdown">
							{amount === '10+' ? (
								<div className="amount-input">
									<input
										type="text"
										className="custom-amount-input"
										placeholder="amount"
									/>
									<button className="custom-amount-button">Update</button>
								</div>
							) : (
								<select onChange={handleChange} className="quantity-dropdown">
									{Array(9)
										.fill(9)
										.map((_, i) => (
											<option>{i + 1}</option>
										))}
									<option>{10}+</option>
								</select>
							)}
						</div>
						<span className="vl"></span>
						<div className="delete-product">
							<span>Delete</span>
						</div>
					</div>
				</div>
			</div>
			<div className="price">
				<strong>{price}</strong>
			</div>
		</div>
	);
};

export default CheckoutItem;
