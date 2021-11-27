import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/amazon-logo.svg';
import { useUserContext } from '../../Context/user.context';
import './SignUpPage.css';
// import { useNavigate } from 'react-router-dom';
import useNavigation from '../../CustomHooks/useNavigation'

const SignUpPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showWarning, setShowWarning] = useState(false);
	const navigator = useNavigation()
	// const navigate = useNavigate();

	const { createUser } = useUserContext();

	const handleSignUp = (e) => {
		e.preventDefault();
		if (name && password && email) {
			setShowWarning(false);
			createUser(name, email, password).then(navigator.goTo('/'));
		} else {
			setShowWarning(true);
		}
	};

	const handleChange = (e) => {
		const type = e.target.name;
		const value = e.target.value;

		switch (type) {
			case 'name':
				setName(value);
				break;
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
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
						<strong>Name</strong>
						<input
							name="name"
							type="text"
							value={name}
							onChange={handleChange}
						/>
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
						{showWarning && (
							<small className="no-match">Please enter all inputs!</small>
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
