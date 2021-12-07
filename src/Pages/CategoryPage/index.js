import React, { useEffect } from 'react';
import './CategoryPage.css';
import { useParams } from 'react-router';
import { useProductsContext } from '../../Context/products.context';

const CategoryPage = () => {
	const { category } = useParams();
	const { fetchCategory } = useProductsContext();
	console.log(category);
	useEffect(() => {
		return () => {};
	}, []);

	return <div></div>;
};

export default CategoryPage;
