import React from 'react';
import { useNavigate } from "react-router-dom";
import './settings.scss';
import {useSelector, useDispatch} from 'react-redux'
import {darkMode} from '../../redux/application/applicationSlice.js'
import {BiChevronLeft} from 'react-icons/bi'

function Settings() {
    const {darkModeActive} = useSelector(state => state.app)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1);
    }
    
	return (
		<div className={`settings ${darkModeActive ? 'darkMode' : ''}`}>
            <div className="title">
                <BiChevronLeft className='backBtn' onClick={handleGoBack}/>
                <h3>Settings</h3>
            </div>
			<div className="settingContainer">
				<p>Dark Mode</p>
				<label className="switch">
					<input type="checkbox" checked={darkModeActive ? true : false} onChange={() => {
                        dispatch(darkMode())
                    }}/>
					<span className="slider round"></span>
				</label>
			</div>
		</div>
	);
}

export default Settings;
