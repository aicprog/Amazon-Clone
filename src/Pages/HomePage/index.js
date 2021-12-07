import React, { useEffect } from 'react';
import { Carousel, ProductRow } from '../../Components';
import './HomePage.css';

const HomePage = (props) => {
	// const { setLoading } = props;

	// useEffect(() => {
	// 	const timer = setTimeout(() => setLoading(false), 500);
	// 	return () => {
	// 		clearTimeout(timer);
	// 	};
	// }, []);

	return (
		<div className="home">
			<div className="home-container">
				<Carousel />
				<ProductRow />
			</div>
		</div>
	);
};

export default HomePage;
