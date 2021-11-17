import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/amazon-logo-2.png';
import './LoginPage.css';

const LoginPage = () => {
	return (
		<div className="login">
			{/* Header Logo */}
			<div className="login-container">
				<Link to="/ ">
					<img src={logo} alt="amazon logo" className="login-logo" />
				</Link>
				<div className="form-container">
					<h1>Sign-In</h1>
					<form>
						<strong>E-mail</strong>
						<input type="text" />
						<strong>Password</strong>
						<input type="password" />
						<button className="sign-in-btn">Sign In</button>
					</form>
					<small className="login-notice">
						By signing-in you agree to the AMAZON CLONE Conditions of Use and
						Sale. Please see our Privacy Notice, our Cookies Notice and our
						Interest Based Ads Notice.
					</small>
				</div>
				<div className="section-divider"></div>
				<div className="hr-middle-text">
					<h5 className="middle-text">New To Amazon?</h5>
				</div>
				<button className="create-account-btn">Create your Amazon Account</button>
			</div>
		</div>
	);
};

export default LoginPage;
