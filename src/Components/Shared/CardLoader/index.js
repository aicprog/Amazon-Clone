import React from 'react';
import './CardLoader.css';

const CardLoader = () => {
	return (
		
			<div className="product-loader-cards">
				{Array(8)
					.fill(8)
					.map((card) => {
						return <LoadingCard />;
					})}
			</div>
	
	);
};

const LoadingCard = () => {
	return (
		<div className="product-loader-card">
			<div className="product-card-loader-inner"></div>
		</div>
	);
};

export default CardLoader;
