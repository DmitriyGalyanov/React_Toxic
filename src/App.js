import React from 'react';

import {Header} from 'Components/Header/Header.jsx'
import {Footer} from 'Components/Footer/Footer.jsx'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {routes} from 'src/routes.js';

import './App.scss';


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header/>
				<main>
						<Switch>
							{routes.map((route, index) => {
								return (<Route key={index} path={route.path} exact={route.exact} component={route.component}/>)
							})}
						</Switch>
				</main>
				<Footer/>
				</BrowserRouter>
		</div>
	);
}

export default App;