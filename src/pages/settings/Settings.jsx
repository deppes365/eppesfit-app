import React from 'react';
import './settings.scss';
import {useSelector, useDispatch} from 'react-redux'
import {darkMode} from '../../redux/application/applicationSlice.js'
import PageBar from '../../components/pageBar/PageBar';

function Settings() {
    const {darkModeActive} = useSelector(state => state.app)
    const dispatch = useDispatch()
    
    
	return (
		<div className={`settings ${darkModeActive ? 'darkMode' : ''}`}>
            <PageBar pageTitle={'Settings'} gearIcon={false}/>
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
