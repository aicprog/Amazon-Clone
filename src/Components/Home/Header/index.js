import React from 'react';
import './Header.css';
import { headerLinks } from '../../../constants/headerLinks';
import SearchIcon from '@mui/icons-material/Search';
import { categories } from '../../../constants/categories';

const Header = () => {
	return (
		<div className="header">
			<div className="header-container">
				<div className="header-top">
					{/* Header Logo */}
					<img
						src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
						alt="amazon logo"
						className="header-logo"
					/>
					<div className="header-option">
						<span className="header-option-one">Deliver to</span>
						<span className="header-option-two">Los Angeles, CA</span>
					</div>
					{/* Header Search Input */}
					<div className="header-search">
						<input className="header-search-input" type="text" />
						<SearchIcon className="header-search-icon" />
					</div>

					{/* Right: Header Options */}
					<div className="header-nav">
						{headerLinks.map((link) => (
							<div
								key={link.id}
								className={`${
									link.icon ? 'header-option-icon' : 'header-option'
								}`}
							>
								<span className="header-option-one">
									{link.topName}
									{link.topName === 'Hello' && ' Guest'}
								</span>

								<span>{link.icon}</span>

								<span className={`${link.className} header-option-two`}>
									{link.bottomName}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Categories */}
				<div className="header-bottom">
					<div className="header-categories">
						{categories.map((category) => (
							<div className="header-category-item" key={category.id}>
								<div className="header-menu-icon">{category.icon}</div>
								<div className="category">{category.name}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
