import React from 'react';
import './Footer.css';
import {
	topFooterData,
	bottomFooterData,
	footerEndData,
} from '../../../constants/footerData';
import { withRouter } from '../../../CustomHooks/withRouter';

const Footer = (props) => {
	const topFooterSections = Object.keys(topFooterData[0]);
	const path = props.location.pathname;

	if (path === '/login' || path === '/signup') {
		return <></>;
	}

	return (
		<div className="footer-container">
			<a className="footer-back-to-top" href="/">
				<div>Back to the top</div>
			</a>
			{/* Top of Footer */}
			<div className="footer-top">
				{topFooterSections.map((section) => {
					const currentSection = topFooterData[0][section];
					return (
						<ul className="footer-top-section" key={currentSection.id}>
							<p>{currentSection.name}</p>
							{currentSection.data.map((link, index) => (
								<li key={index} className="footer-top-link">
									<a href={link.href}>{link.name}</a>
								</li>
							))}
						</ul>
					);
				})}
			</div>
			{/* Bottom of Footer */}
			<div className="footer-bottom">
				<div className="footer-bottom-links">
					{bottomFooterData.map((link, index) => (
						<div key={index} className="footer-bottom-link">
							<h5>{link.name}</h5>
							<small>{link.desc}</small>
						</div>
					))}
				</div>

				{/* Last part of footer */}

				<ul className="footer-end-links">
					{footerEndData.map((link, index) => (
						<li className="footer-end-link" key={index}>
							<a href={link.href} key={index}>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default withRouter(Footer);
