import React, { useEffect, useState } from 'react';
import './notification.scss';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { closeNotification } from '../../redux/notification/notifcationSlice';


function Notification() {
	const { message, error, showNotification } = useSelector(
		state => state.notification
	);
	const {darkModeActive} = useSelector(state => state.app)
	const dispatch = useDispatch();
	const [cssScale, setCssScale] = useState(1);

	useEffect(() => {
		if (showNotification) {
			setTimeout(() => {
				dispatch(closeNotification());
			}, 2500);

			let scale = 1;
			let ms = 25000;

			let timer = setInterval(() => {
				ms = ms - 100;
				scale = ms / 25000;
				setCssScale(scale);
			}, 10);

			return () => clearTimeout(timer);
		}

	}, [showNotification]);

	return (
		<div
			className={`notification ${darkModeActive ? 'darkMode' : ''} ${error ? 'error' : ''} ${
				showNotification ? 'show' : ''
			}`}
		>
			<div className="timer">
				<div
					className="fill"
					style={{ transform: `scaleX(${cssScale})` }}
				></div>
			</div>
			<p>{message}</p>
			<FaTimes
				className="closeBtn"
				onClick={() => {
					dispatch(closeNotification());
				}}
			/>
		</div>
	);
}

export default Notification;
