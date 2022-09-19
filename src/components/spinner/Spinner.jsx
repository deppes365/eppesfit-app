import React from 'react';
import './spinner.scss';

function Spinner() {
	return (
		<div className="spinnerContainer">
			<div className="spinner">
                <div className="ball ball1"></div>
                <div className="ball ball2"></div>
                <div className="ball ball3"></div>
                <div className="ball ball4"></div>
            </div>
			<div className="center">
				<h3>Loading...</h3>
			</div>
		</div>
	);
}

export default Spinner;
