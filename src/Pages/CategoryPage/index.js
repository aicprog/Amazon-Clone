import React, { useEffect } from 'react';
import './CategoryPage.css';
import { useParams } from 'react-router';
import { useProductsContext } from '../../Context/products.context';
import { Product } from '../../Components';
import { Loader } from '../../Components';

const CategoryPage = () => {
	const { category } = useParams();
	const {
		fetchCategory,
		fetchProducts,
		category_items,
		products,
		products_loading,
	} = useProductsContext();
	useEffect(() => {
		category !== 'all' && fetchCategory(category);
	}, [category]);

	console.log(category);
	console.log(category_items);

	if (products_loading || products.length === 0) {
		return <Loader message="Loading..." />;
	}

	if (category === 'all') {
		return InnerCategoryPage(products);
	}

	return InnerCategoryPage(category_items);
};

export default CategoryPage;

const InnerCategoryPage = (items) => {
	return (
		<div className="categories-wrapper">
			{items.map((product) => (
				<div className="category-items" key={product.id}>
					<Product product={product} />
				</div>
			))}
		</div>
	);
};
