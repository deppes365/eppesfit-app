import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './signIn.scss';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import {useDispatch, useSelector} from 'react-redux';
import { notificationMessages } from '../../notificationMessages';
import {errorNotification} from '../../redux/notification/notifcationSlice'
import {setLoading} from '../../redux/application/applicationSlice.js'
import { useEffect } from 'react';

function SignIn() {

	// State
	const [showPassword, setShowPassword] = useState(false);
	const [userLogin, setUserLogin] = useState({
		email: '',
		password: '',
	});
	const {darkModeActive} = useSelector(state => state.app)

	// useEffect
	useEffect(() => {
		dispatch(setLoading(false))
	}, [])
	// Hooks
	const dispatch = useDispatch()

	// Refs

	// Functions
	const handleShowPassword = () => setShowPassword(prevState => !prevState);

	const handleChange = e => {
		setUserLogin({
			...userLogin,
			[e.target.name]: e.target.value,
		});
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
				<h2>Sign In</h2>
				<input
					type="email"
					placeholder="Email"
					id="email"
					name="email"
					onChange={handleChange}
				/>
				<div className="passwordContainer">
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder="Password"
						id="password"
						name="password"
						onChange={handleChange}
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
				<button>Sign In</button>
				<Link to='/sign-up'>Don't have an account? Click here!</Link>
			</div>
		</div>
	);
}

export default SignIn;
