import React from 'react';
import { Link } from 'react-router-dom';
import OrderCard from '../../Components/Shared/OrderCard';
import PageHero from '../../Components/Shared/PageHero';
import { useUserContext } from '../../Context/user.context';
import './OrdersPage.css';

const OrdersPage = () => {
	const { currentUser } = useUserContext();

	const columns = [
		'Orders',
		'Buy Again',
		'Not Yet Shipped',
		'Cancelled Orders',
	];

	if (!currentUser) {
		return (
			<div className="orders-page-wrapper">
				<PageHero title="Your Orders" />
				<div className="instruct-login">
					<p className="title-not-loggedin">
						Looks like you are not signed in...
					</p>
					<p className="title-not-loggedin">
						<Link to="/login" className="orders-return-home">
							{' '}
							Sign in{' '}
						</Link>{' '}
						&nbsp;to see your orders.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="orders-page-wrapper">
				{/* Navigation */}
				<PageHero title="Your Orders" />
				{/* Search */}
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
