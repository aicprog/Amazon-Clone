import React from 'react';
import './Header.css';
import { headerLinks } from '../../../constants/headerLinks';
import { BiSearch } from 'react-icons/bi';
import { categories } from '../../../constants/categories';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../../Context/products.context';
const Header = () => {
	const searchStyle = {
		padding: '5px',
		height: '38.5px !important',
		backgroundColor: '#cd9042',
		borderRadius: '0 5px 5px 0',
		position: 'absolute',
		right: 0,
	};

	const { basket } = useProductsContext();

	return (
		<div className="header">
			<div className="header-container">
				<div className="header-top">
					{/* Header Logo */}
					<Link to="/">
						<img
							src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
							alt="amazon logo"
							className="header-logo"
						/>
					</Link>
					<div className="header-option">
						<span className="header-option-one">Deliver to</span>
						<span className="header-option-two">Los Angeles, CA</span>
					</div>
					{/* Header Search Input */}
					<div className="header-search">
						<input className="header-search-input" type="text" />
						<BiSearch />
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

								<span className={`${link.className} header-option-two`}>
									{link.bottomName}
								</span>

								<Link to="/checkout">
									<div className="cart-container">
										<span className="basket-count">{basket?.length}</span>

										<img className="icon" src={link.icon} alt="" />
										<strong className="cart-name">{link.prop}</strong>
									</div>
								</Link>
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
