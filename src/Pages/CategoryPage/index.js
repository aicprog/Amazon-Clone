import React, { useEffect } from 'react';
import './CategoryPage.css';
import { useParams } from 'react-router';
import { useProductsContext } from '../../Context/products.context';
import { CardLoader, Product } from '../../Components';
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
		return <CardLoader />;
	}

	if (category === 'all') {
		return (
			<>
				<HeaderCategoryPage category={category} length={products.length} />
				{InnerCategoryPage(products)}
			</>
		);
	}

	return (
		<>
			<HeaderCategoryPage category={category} length={category_items.length} />
			{InnerCategoryPage(category_items)}
		</>
	);
};

export default CategoryPage;

const HeaderCategoryPage = ({ category, length }) => (
	<div className="category-page-header">
		<h1 className="category-page-title">{category}</h1>
		<p>{length} total items</p>
	</div>
);

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
