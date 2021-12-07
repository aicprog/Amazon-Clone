import React, { useState, useEffect } from 'react';
import './CheckoutItem.css';
import prime from '../../../assets/prime.png';
import { useProductsContext } from '../../../Context/products.context';

const CheckoutItem = ({ product }) => {
	const { id, title, image, price, amount } = product;
	const [currentAmount, setCurrentAmount] = useState(amount);
	const [amountAboveTen, setAmountAboveTen] = useState(false);
	const { removeFromCart, toggleProductAmount } = useProductsContext();

	const handleChange = (e) => {
		const newAmount = e.target.value;
		setCurrentAmount(newAmount);

		// console.log('HANEL', amount);

		if (amount < 10) {
			console.log('HELO', amount);
			toggleProductAmount(id, newAmount);
		} else {
			setAmountAboveTen(true);
		}

		// setCurrentAmount(amount);
	};
	const handleSubmit = (e) => {
		// console.log("HELO", currentAmount);
		e.preventDefault();
		if (currentAmount) {
			toggleProductAmount(id, currentAmount);
		}
	};

	useEffect(() => {
		if (amount >= 10) {
			setAmountAboveTen(true);
		}
	}, [amount]);

	return (
		<div className="checkout-item-container">
			<div className="checkout-item-info">
				<img src={image} alt={title} className="checkout-item-img" />
				<div className="checkout-item-inner-info">
					<strong className="checkout-item-title">{title}</strong>
					<small className="stock-message">In Stock</small>
					<img src={prime} alt="" className="prime-img" />
					<div className="gift-input">
						<input
							id="checkbox-gift"
							className="checkbox-gift"
							name="checkbox-gift"
							type="checkbox"
						/>
						<small>This is a gift</small>
					</div>
					<div className="product-amount-changes">
						<div className="product-amount-dropdown">
							{amountAboveTen ? (
								<form className="amount-input">
									<input
										type="text"
										className="custom-amount-input"
										placeholder="amount"
										value={currentAmount}
										onChange={handleChange}
									/>
									<button
										className="custom-amount-button"
										type="submit"
										onClick={handleSubmit}
									>
										Update
									</button>
								</form>
							) : (
								<select
									value={currentAmount}
									className="quantity-dropdown"
									onChange={handleChange}
								>
									{Array(9)
										.fill(9)
										.map((_, i) => (
											<option key={i}>{i + 1}</option>
										))}
									<option value={10}>10+</option>
								</select>
							)}
						</div>
						<span className="vl"></span>
						<div className="delete-product" onClick={() => removeFromCart(id)}>
							<span>Delete</span>
						</div>
					</div>
				</div>
			</div>
			<div className="price">
				<strong>${Math.round(price * amount * 100) / 100}</strong>
			</div>
		</div>
	);
};

export default CheckoutItem;
