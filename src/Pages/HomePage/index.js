import React, { useEffect } from 'react';
import { Carousel, ProductRow } from '../../Components';
import './HomePage.css';

const HomePage = (props) => {


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
