import React from 'react';

import {ThemeProvider} from 'styled-components'
import {mainTheme} from 'src/themes/mainTheme.js';


import {Header} from 'Components/Header/Header.jsx'
import {Footer} from 'Components/Footer/Footer.jsx'

import './App.scss';


function App() {
	return (
		<ThemeProvider theme={mainTheme}>
			<div className="App">
				<Header/>
				<div style={{height: '150px'}}/>
				<Footer/>
			</div>
		</ThemeProvider>
	);
}

export default App;