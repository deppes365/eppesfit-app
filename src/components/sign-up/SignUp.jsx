import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './signUp.scss';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { errorNotification } from '../../redux/notification/notifcationSlice';
import {setLoading} from '../../redux/application/applicationSlice.js'

function SignUp() {
	// State
	const [showPassword, setShowPassword] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordsError, setPasswordsError] = useState(false);
	const [userLogin, setUserLogin] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const { darkModeActive, loading } = useSelector(state => state.app);


	// useEffect
	useEffect(() => {
		dispatch(setLoading(false))
	}, [])

	// Hooks
	const dispatch = useDispatch();

	// Refs
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const confirmPasswordRef = useRef(null);

  // Functions
	const handleShowPassword = () => setShowPassword(prevState => !prevState);

	const handleChange = e => {
		if (emailError || passwordsError) {
			setEmailError(false);
			setPasswordsError(false);
		}
		setUserLogin({
			...userLogin,
			[e.target.name]: e.target.value,
		});
	};

	const checkCredentials = () => {
		if (
			!userLogin.email.length ||
			!userLogin.password.length ||
			!userLogin.confirmPassword.length
		) {
			return;
		}
		if (!userLogin.email.includes('@')) {
			dispatch(errorNotification('Please enter a valid email'));
			emailRef.current.focus();
			setEmailError(true);
			return;
		}
		if (userLogin.password !== userLogin.confirmPassword) {
			dispatch(errorNotification('Passwords do not match'));
			passwordRef.current.value = '';
			confirmPasswordRef.current.value = '';
			setPasswordsError(true);
			return;
    }
	};

	return (
		<div className={`signIn ${darkModeActive ? 'darkMode' : ''}`}>
			<h1>
				Eppes
				<span>
					<em>Fit</em>
				</span>
			</h1>
			<div className="signInGroup">
				<h2>Create Account</h2>
				<input
					type="text"
					placeholder="Email"
					id="email"
					name="email"
					onChange={handleChange}
					ref={emailRef}
					className={`${emailError ? 'emailError' : ''}`}
				/>
				<div className="passwordContainer">
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder="Password"
						id="password"
						name="password"
						onChange={handleChange}
						ref={passwordRef}
						className={`${passwordsError ? 'passwordsError' : ''}`}
					/>
					{showPassword ? (
						<AiFillEye className="passwordIcon" onClick={handleShowPassword} />
					) : (
						<AiFillEyeInvisible
							className="passwordIcon"
							onClick={handleShowPassword}
						/>
					)}
				</div>
				<div className="passwordContainer">
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder="Confirm Password"
						id="confirmPassword"
						name="confirmPassword"
						onChange={handleChange}
						ref={confirmPasswordRef}
						className={`${passwordsError ? 'passwordsError' : ''}`}
					/>
					{showPassword ? (
						<AiFillEye className="passwordIcon" onClick={handleShowPassword} />
					) : (
						<AiFillEyeInvisible
							className="passwordIcon"
							onClick={handleShowPassword}
						/>
					)}
				</div>
				<button
					onClick={e => {
						e.preventDefault();
						checkCredentials();
					}}
				>
					Create Account
				</button>
				<Link to="/sign-in">Already have an account? Click here!</Link>
			</div>
		</div>
	);
}

export default SignUp;
