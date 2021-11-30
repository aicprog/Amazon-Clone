import React from 'react';
import OrderCard from '../../Components/Shared/OrderCard';
import PageHero from '../../Components/Shared/PageHero';
import './OrdersPage.css';

const OrdersPage = () => {
	const columns = [
		'Orders',
		'Buy Again',
		'Not Yet Shipped',
		'Cancelled Orders',
	];
	return (
		<div className="orders-page-wrapper">
			<PageHero title="Your Orders" />
			<div className="orders-search">
				<h1 className="orders-title">Your Orders</h1>
				<div className="search-input">
					<input
						placeholder="Search all orders"
						className="search-all-orders"
					></input>
					<button className="search-orders-btn">Search Orders</button>
				</div>
			</div>
			{/* Columns */}
			<div className="order-page-columns">
				<div className="order-page-header-info">
					{columns.map((column) => (
						<div className="order-page-header-column">{column}</div>
					))}
				</div>
			</div>
			<div>
				<strong className="orders-placed">0 orders </strong>
			</div>
			{/* Card */}
			<OrderCard />
			<OrderCard />
		</div>
	);
};

export default OrdersPage;
