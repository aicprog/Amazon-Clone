import React from 'react';
import './ProductRow.css';
import { AiTwotoneStar } from 'react-icons/ai';
import { ProductHomePageData } from '../../../constants/productHomePageData';
import { useProductsContext } from '../../../Context/products.context';

const ProductRow = () => {
	return (
		<>
			{/* product */}
			{ProductHomePageData.map((row) => (
				<div key={row.id} className="product-row">
					{row.products.map((product) => (
						<Product key={product.id} product ={product} />
					))}
				</div>
			))}
		</>
	);
};

export default ProductRow;

//Product for product row
const Product = ({ product }) => {
	const {title, price, img, rating} = product
	const { addToCart } = useProductsContext();
	
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
			<button onClick={() => addToCart({...product, amount: 1})}>Add to Cart</button>
		</div>
	);
};
