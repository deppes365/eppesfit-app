import React, { useEffect, useState, useRef } from 'react';
import './navBar.scss';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { IoScaleOutline, IoBarbellOutline } from 'react-icons/io5';

function NavBar() {
	const { darkModeActive } = useSelector(state => state.app);
	const [showNav, setShowNav] = useState(true);
    const [activeLink, setActiveLink] = useState('workout')
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/sign-in' || location.pathname === '/sign-up') {
			setShowNav(false);
		}
        if(location.pathname !== '/sign-in' || location.pathname !== '/sign-up') {
            const pathname = location.pathname.split('/')[1]
            pathname.length === 0 && setActiveLink('workout');
            pathname === 'weigh-in' && setActiveLink('weighIn')
            pathname === 'profile' && setActiveLink('profile')
        }
		
	}, [location]);

	const activeLinkIndicator = useRef(null)

	return (
		<>
			{showNav && (
				<div className={`navBar ${darkModeActive ? 'darkMode' : ''}`}>
                <div className={`activeLinkIndicator ${activeLink}`} ref={activeLinkIndicator}></div>
					<Link to="/weigh-in" className={`navBarIcon weighIn ${activeLink === 'weighIn' ? 'active' : ''}`}>
						<IoScaleOutline className='icon' />
					</Link>
					<Link to="/" className={`navBarIcon workout ${activeLink === 'workout' ? 'active' : ''}`}>
						<IoBarbellOutline className='icon'/>
					</Link>
					<Link to="/profile" className={`navBarIcon profile ${activeLink === 'profile' ? 'active' : ''}`}>
						<AiOutlineUser className='icon'/>
					</Link>
				</div>
			)}
		</>
	);
}

export default NavBar;
