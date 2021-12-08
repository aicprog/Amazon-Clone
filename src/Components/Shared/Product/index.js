import React from 'react';
import './Product.css';
import { useProductsContext } from '../../../Context/products.context';
import { AiTwotoneStar } from 'react-icons/ai';

//Product for product row
const Product = ({ product }) => {
	const { addToCart } = useProductsContext();


	const { title, price, image, rating } = product;

	return (
		<div className="product">
			<div className="products-info-top">
				<p className="product-info product-title">
					{/* {title} */}
					{title.length > 40 ? `${title.substring(0, 40)}...` : `${title}`}
				</p>
				<p className="product-price product-info">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product-rating product-info">
					<p>
						{Array(Math.ceil(rating.rate))
							.fill(rating.rate)
							.map((_, i) => (
								<AiTwotoneStar key={i} className="rating-icon" />
							))}
					</p>
				</div>
			</div>
			<img src={image} alt="" className="product-img" />
			<button onClick={() => addToCart({ ...product, amount: 1 })}>
				Add to Cart
			</button>
		</div>
	);
};

export default Product;
