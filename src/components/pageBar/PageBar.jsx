import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './pageBar.scss';
import { BiChevronLeft } from 'react-icons/bi';
import { BsFillGearFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

function PageBar({ pageTitle, gearIcon = true }) {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div className="pageBar">
			<BiChevronLeft className="backBtn" onClick={handleGoBack} />
			<h3 className="pageTitle">{pageTitle}</h3>
			{gearIcon && (
				<Link to="/settings">
					<BsFillGearFill className="settingsBtn" />
				</Link>
			)}
		</div>
	);
}

PageBar.propTypes = {
	pageTitle: PropTypes.string,
    gearIcon: PropTypes.bool
};

export default PageBar;
