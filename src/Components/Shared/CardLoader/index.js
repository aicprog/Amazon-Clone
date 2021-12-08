import React from 'react';
import './CardLoader.css';

const CardLoader = ({cardAmount}) => {
	return (
		<div
			className={`${
				cardAmount === 8
					? 'product-loader-cards-more'
					: 'product-loader-cards-less'
			}`}
		>
			{Array(cardAmount)
				.fill(cardAmount)
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
