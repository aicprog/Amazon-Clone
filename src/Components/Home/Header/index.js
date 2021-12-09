import React from 'react';
import './Header.css';
import { headerLinks } from '../../../constants/headerLinks';
import { BiSearch } from 'react-icons/bi';
import { categories } from '../../../constants/categories';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../../Context/products.context';
import { withRouter } from '../../../CustomHooks/withRouter';
import { useUserContext } from '../../../Context/user.context';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = (props) => {
	const path = props.location.pathname;

	if (path === '/login' || path === '/signup') {
		return <></>;
	}

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
					<HeaderRightOptions />
				</div>
				{/* Categories */}
				<HeaderBottom />
			</div>
		</div>
	);
};
export const HeaderRightOptions = () => {
	const { currentUser, signOut } = useUserContext();
	const { totalCartQuantity, toggleSidebar } = useProductsContext();
	return (
		<>
			<div className="header-nav">
				<Link
					to={`${currentUser?.displayName ? '/' : '/login'}`}
					className="header-option"
				>
					<span className="header-option-one">
						{`Hello ${
							currentUser?.displayName ? currentUser.displayName : 'Guest'
						}`}
					</span>

					<span className={`header-option-two`}>
						{currentUser?.displayName ? (
							<span onClick={signOut}>Sign Out</span>
						) : (
							<span>Sign In </span>
						)}
					</span>
				</Link>
				{headerLinks.map((link) => (
					<Link
						to={link.href}
						key={link.id}
						className={`${link.icon ? 'header-option-icon' : 'header-option'}`}
					>
						<span className="header-option-one">{link.topName}</span>

						<span className={`header-option-two`}>{link.bottomName}</span>

						{/* For cart icon */}
						<div className="cart-container">
							<span className="basket-count">{totalCartQuantity}</span>

							<img className="icon" src={link.icon} alt="" />
							<strong className="cart-name">{link.prop}</strong>
						</div>
					</Link>
				))}
			</div>
			<GiHamburgerMenu className="hamburger" onClick={toggleSidebar} />
		</>
	);
};

const HeaderBottom = () => {
	return (
		<div className="header-bottom">
			<div className="header-categories">
				{categories.map((category) => (
					<Link
						to={category.href}
						key={category.id}
						className="header-category-item"
					>
						<div className="header-menu-icon">{category.icon}</div>
						<div className="category">{category.name}</div>
					</Link>
				))}
			</div>
		</div>
	);
};
export default withRouter(Header);
