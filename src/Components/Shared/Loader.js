import React from 'react';
import './Loader.css';

const Loader = ({ message }) => {
	return (
		<div className="loading-background">
			<LoadingAnimation message={message} />
		</div>
	);
};

const LoadingAnimation = ({ message }) => {
	return (
		<div className="loading-background">
			<div className="loading-wrapper">
				<div className="circle"></div>
				<p className="message">{message}</p>
			</div>
		</div>
	);
};

export default Loader;
