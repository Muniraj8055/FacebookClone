import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Homeheader from './Components/Homeheader';
import Sidebar from './Components/Sidebar';
import Sidebar2 from './Components/Sidebar2';
import Posts from './Components/Posts';
import Profile from './Components/Profile';

import { auth } from './Components/firebase';

function App() {
	const [user, setUser] = useState([]);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setUser(authUser);
			} else {
				setUser(false);
			}
		});
	}, []);

	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/register'>
						<Register />
					</Route>
					<Route path='/:username/:uid'>
						<Homeheader user={user} />
						<Profile user={user} />
					</Route>

					<Route exact path='/'>
						<Homeheader user={user} selected />
						<div className='app__page'>
							<Sidebar user={user} />
							<div className='app__posts'>
								<Posts user={user} />
							</div>
							<Sidebar2 />
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
