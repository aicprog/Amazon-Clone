import React, { useEffect } from 'react';
import './CategoryPage.css';
import { useParams } from 'react-router';
import { useProductsContext } from '../../Context/products.context';
import { CardLoader, Product } from '../../Components';

const CategoryPage = () => {
	const { category } = useParams();
	const { fetchCategory, category_items, products, products_loading } =
		useProductsContext();

	useEffect(() => {
		category !== 'all' && fetchCategory(category);
	}, [category]);

	// card loader
	if (products_loading || products.length === 0) {
		return (
			<>
				<HeaderCategoryPage category={category} />
				<CardLoader cardAmount={8} />;
			</>
		);
	}

	//display all products
	if (category === 'all') {
		return (
			<>
				<HeaderCategoryPage category={category} length={products.length} />
				{InnerCategoryPage(products)}
			</>
		);
	}
	//display items based on category
	return (
		<>
			<HeaderCategoryPage category={category} length={category_items.length} />
			{InnerCategoryPage(category_items)}
		</>
	);
};

export default CategoryPage;

//other needed components
const HeaderCategoryPage = ({ category, length = 0 }) => (
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
