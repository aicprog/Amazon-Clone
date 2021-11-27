import React from 'react';
import './Header.css';
import { headerLinks } from '../../../constants/headerLinks';
import { BiSearch } from 'react-icons/bi';
import { categories } from '../../../constants/categories';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../../Context/products.context';
import { withRouter } from '../../../CustomHooks/withRouter';
import { useUserContext } from '../../../Context/user.context';

const Header = (props) => {
	const { totalCartQuantity } = useProductsContext();
	const { currentUser, signOut } = useUserContext();
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

					{/* Right: Header Options */}
					<div className="header-nav">
						{headerLinks.map((link) => (
							<Link
								to={link.href}
								key={link.id}
								className={`${
									link.icon ? 'header-option-icon' : 'header-option'
								}`}
							>
								<span className="header-option-one">{link.topName}</span>

								<span className={`header-option-two`}>
									{link.bottomName}
								</span>

								{/* For cart icon */}
								<div className="cart-container">
									<span className="basket-count">{totalCartQuantity}</span>

									<img className="icon" src={link.icon} alt="" />
									<strong className="cart-name">{link.prop}</strong>
								</div>
							</Link>
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

export default withRouter(Header);
