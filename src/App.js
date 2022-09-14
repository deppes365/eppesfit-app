import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp'
import Notification from './components/notification/Notification';

function App() {
	const { darkModeActive } = useSelector(state => state.app);

	return (
		<Router>
			<div className={`App ${darkModeActive ? 'darkMode' : ''}`}>
				<Notification />
				<Routes>
					<Route path='/sign-in' element={<SignIn/>} />
					<Route path='/sign-up' element={<SignUp/>} />
				</Routes>

			</div>
		</Router>
	);
}

export default App;
