import React from 'react';
import './ProductRow.css';
import { useProductsContext } from '../../../Context/products.context';
import { CardLoader, Product } from '../../../Components';

const ProductRow = () => {
	const { products, products_loading } = useProductsContext();
	const array = [2, 1, 3];

	let item = 1;

	if (products_loading || products.length === 0) {
		return <CardLoader cardAmount={6} />;
	}


	return (
		<>
			{array.map((row, index) => {
				return (
					<div key={index} className="product-row">
						{[...Array(row).keys()].map((index) => {
							item += 1;
							return <Product key={index} product={products[item]} />;
						})}
					</div>
				);
			})}
		</>
	);
};

export default ProductRow;
