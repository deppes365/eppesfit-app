import React, { useEffect, useState } from 'react';
import './navBar.scss';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { IoScaleOutline, IoBarbellOutline } from 'react-icons/io5';

function NavBar() {
	const { darkModeActive } = useSelector(state => state.app);
	const [showNav, setShowNav] = useState(true);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/sign-in' || location.pathname === '/sign-up') {
			setShowNav(false);
		}
	}, [location]);

	return (
		<>
			{showNav && (
				<div className={`navBar ${darkModeActive ? 'darkMode' : ''}`}>
					<Link to="/weight-in" className="navBarIcon weighIn">
						<IoScaleOutline />
					</Link>
					<Link to="/" className="navBarIcon workout">
						<IoBarbellOutline />
					</Link>
					<Link to="/profile" className="navBarIcon user">
						<AiOutlineUser />
					</Link>
				</div>
			)}
		</>
	);
}

export default NavBar;
