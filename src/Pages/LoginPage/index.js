import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/amazon-logo.svg';
import { loginFooterData } from '../../constants/footerData';
import './LoginPage.css';

const LoginPage = () => {
	const handleSignIn = (e) => {
		e.preventDefault();
	};

	return (
		<div className="login">
			{/* Header Logo */}
			<div className="login-container">
				<Link to="/ ">
					<img src={logo} alt="amazon logo" className="login-logo" />
				</Link>
				<div className="form-container">
					<h1>Sign-In</h1>
					<form className="login-form">
						<strong>E-mail</strong>
						<input type="text" />
						<strong>Password</strong>
						<input type="password" />
						<button className="sign-in-btn" onClick={handleSignIn}>
							Sign In
						</button>
					</form>
					<small className="login-notice">
						By signing-in you agree to the AMAZON CLONE Conditions of Use and
						and Privacy Notice
					</small>
				</div>
				<div className="section-divider"></div>
				<div className="hr-middle-text">
					<h5 className="middle-text">New To Amazon?</h5>
				</div>
				<Link to="/signup">
					<button className="create-account-btn">
						Create your Amazon Account
					</button>
				</Link>
			</div>
			<LoginPageFooter />
		</div>
	);
};

export default LoginPage;

export const LoginPageFooter = () => (
	<div className="login-footer">
		<div className="login-footer-links">
			{loginFooterData.map((link) => (
				<a key={link.id} className="login-footer-link" href={link.href}>
					{link.name}
				</a>
			))}
		</div>
		<div className="login-footer-copyright">
			&copy;1996-2021, Amazon.com, Inc. or its affiliates
		</div>
	</div>
);
