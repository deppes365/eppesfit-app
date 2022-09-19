import React, { useState, useEffect } from 'react';
import './profile.scss';
import { Link, useNavigate } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';
import { BsFillGearFill } from 'react-icons/bs';
import MePic from '../../assets/images/me.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from '../../redux/application/applicationSlice.js';

import PageBar from '../../components/pageBar/PageBar';

function Profile() {
	const { darkModeActive } = useSelector(state => state.app);

	const [editImg, setEditImage] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setLoading(false));
	}, []);

	const handleImgEdit = () => {
		setEditImage(prevState => !prevState);
	};

	return (
		<div className={`profilePage ${darkModeActive ? 'darkMode' : ''}`}>
			<PageBar pageTitle={'Profile'}/>
			<div className="profileImg">
				<div className="imgContainer">
					<img src={MePic} alt="" />
				</div>
				<p onClick={handleImgEdit} style={{ cursor: 'pointer' }}>
					{editImg ? 'Done' : 'Change'}
				</p>
			</div>
		</div>
	);
}

export default Profile;
