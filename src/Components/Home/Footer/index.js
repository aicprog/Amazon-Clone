import React from 'react';
import './Footer.css';
import { topFooterData, bottomFooterData, footerEndData } from '../../../constants/footerData';
const Footer = () => {
	const topFooterSections = Object.keys(topFooterData[0]);

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
							{currentSection.data.map((link) => (
								<li key={link.id} className="footer-top-link">
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
					{footerEndData.map((link) => (
						<li className="footer-end-link">
							<a href={link.href}>{link.name}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Footer;
