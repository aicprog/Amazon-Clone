import React from 'react';
import './ProductRow.css';
import { AiTwotoneStar } from 'react-icons/ai';
import { ProductHomePageData } from '../../../constants/productHomePageData';

const ProductRow = () => {
	return (
		<>
			{/* product */}
			{ProductHomePageData.map((row) => (
				<div key={row.id} className="product-row">
					{row.products.map((product) => (
						<Product key={`${row.id}${product.id}`} {...product} />
					))}
				</div>
			))}
		</>
	);
};

export default ProductRow;

//Product for product row
const Product = ({ title, price, img, rating }) => {
	return (
		<div className="product">
			<div className="products-info-top">
				<p className="product-info product-title">
					{title}
					{/* {title.length > 35 ? `${title.substring(0, 35)}...` : `${title}`} */}
				</p>
				<p className="product-price product-info">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product-rating product-info">
					<p>
						{Array(rating)
							.fill(rating)
							.map((_, i) => (
								<AiTwotoneStar key={i} className="rating-icon" />
							))}
					</p>
				</div>
			</div>
			<img src={img} alt="" className="product-img" />
			<button>Add to Cart</button>
		</div>
	);
};
