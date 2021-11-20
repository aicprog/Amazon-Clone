import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/amazon-logo.svg';
import { useUserContext } from '../../Context/user.context';
import './SignUpPage.css';

const SignUpPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showWarning, setShowWarning] = useState(false);

	const { createUser } = useUserContext();

	const handleSignUp = (e) => {
		e.preventDefault();
		if (password === confirmPassword && password && confirmPassword) {
			createUser(email, password);
			setShowWarning(false);
		} else {
			setShowWarning(true);
		}
	};

	const handleChange = (e) => {
		const type = e.target.name;
		const value = e.target.value;

		switch (type) {
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;
			case 'confirmPassword':
				setConfirmPassword(value);

				break;
			default:
				break;
		}
	};

	return (
		<div className="login">
			{/* Header Logo */}
			<div className="login-container">
				<Link to="/ ">
					<img src={logo} alt="amazon logo" className="login-logo" />
				</Link>
				<div className="form-container">
					<h1>Create account</h1>
					<form className="login-form">
						<strong>Email</strong>
						<input
							name="email"
							type="text"
							value={email}
							onChange={handleChange}
						/>
						<strong>Password</strong>
						<input
							name="password"
							type="password"
							value={password}
							onChange={handleChange}
						/>
						<strong>Re-enter password</strong>
						<input
							name="confirmPassword"
							type="password"
							value={confirmPassword}
							onChange={handleChange}
						/>
						{showWarning && (
							<small className="no-match">Passwords must match!</small>
						)}
						<button className="sign-in-btn" onClick={handleSignUp}>
							Sign In
						</button>
					</form>
					<small className="login-notice">
						By signing-in you agree to the AMAZON CLONE Conditions of Use and
						and Privacy Notice
					</small>
					<br />
					<small>
						Already have an account? <Link to="/login">Sign-in</Link>
					</small>
				</div>
			</div>
			{/* <LoginPageFooter /> */}
		</div>
	);
};

export default SignUpPage;
