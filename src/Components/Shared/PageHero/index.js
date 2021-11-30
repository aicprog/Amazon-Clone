import React from 'react';
import { Link } from 'react-router-dom';
import './PageHero.css';

const PageHero = ({ title }) => {
	return (
		<div className="pagehero-wrapper">
			<h3 className="pagehero-inner">
				<Link to="/" className="pagehero-link">
					<span>Home</span>
				</Link>
				<span className="pagehero-arrow">&#8250;</span>
				<span className="pagehero-title">{title}</span>
			</h3>
		</div>
	);
};

export default PageHero;
