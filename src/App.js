import React, { useState, useEffect } from 'react';
import './App.css';
import { Footer, Header } from './Components';
import { HomePage, CheckoutPage, LoginPage, SignUpPage, OrdersPage } from './Pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import history from './History';

function App() {
	return (
		<div className="app">
			<Router history={history}>
				{/* Header */}
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/orders" element={<OrdersPage />} />
				</Routes>
				{/* Footer */}
				<Footer />
			</Router>
		</div>
	);
}

export default App;
