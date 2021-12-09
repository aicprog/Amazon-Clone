import React from 'react';
import { useProductsContext } from '../../../Context/products.context';
import { useUserContext } from '../../../Context/user.context';
import { headerLinks } from '../../../constants/headerLinks';
import { Link } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';
import './Sidebar.css';

const Sidebar = () => {
	const { totalCartQuantity, isSidebarOpen, toggleSidebar } =
		useProductsContext();
	const { currentUser, signOut } = useUserContext();
	return (
		<aside className={`${isSidebarOpen ? 'show-sidebar sidebar' : 'sidebar'}`}>
			<div className="sidebar-header">
				<img
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					className="sidebar-logo"
					alt="amazon"
				/>
				<button className="close-btn" type="button" onClick={toggleSidebar}>
					<VscChromeClose />
				</button>
			</div>
			<div className="sidebar-nav">
				<Link
					to={`${currentUser?.displayName ? '/' : '/login'}`}
					className="sidebar-option"
				>
					<span className="sidebar-option-one">
						{`Hello ${
							currentUser?.displayName ? currentUser.displayName : 'Guest'
						}`}
					</span>

					<span className={`sidebar-option-two`}>
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
						className={`${
							link.icon ? 'sidebar-option-icon' : 'sidebar-option'
						}`}
					>
						<span className="sidebar-option-one">{link.topName}</span>

						<span className={`sidebar-option-two`}>{link.bottomName}</span>

						{/* For cart icon */}
						<div className="sidebar-cart-container">
							<span className="sidebar-basket-count">
								{link.icon && totalCartQuantity}
							</span>

							<img className="sidebar-icon" src={link.icon} alt="" />
							<strong className="sidebar-cart-name">{link.prop}</strong>
						</div>
					</Link>
				))}
			</div>
		</aside>
	);
};
export default Sidebar;
