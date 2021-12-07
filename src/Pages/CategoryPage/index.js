import React, { useEffect } from 'react';
import './CategoryPage.css';
import { useParams } from 'react-router';
import { useProductsContext } from '../../Context/products.context';
import { Product } from '../../Components';
import { Loader } from '../../Components';

const CategoryPage = () => {
	const { category } = useParams();
	const { fetchCategory, category_items, products, products_loading } =
		useProductsContext();
	useEffect(() => {
		fetchCategory(category);
	}, [category]);

	console.log('CATEGORY', category_items);

	if (products_loading || products.length === 0) {
		return <Loader message="Loading..." />;
	}

	return (
		<div>
			<div className="categories-wrapper">
				{category_items.map((product) => (
					<div className="category-items">
						<Product product={product} />
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryPage;
