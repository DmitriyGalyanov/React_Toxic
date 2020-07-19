import React from 'react';

import {ThemeProvider} from 'styled-components'
import {mainTheme} from 'src/themes/mainTheme.js';


import {Header} from 'Components/Header/Header.jsx'

// import 'App.css';


function App() {
	return (
		<ThemeProvider theme={mainTheme}>
			<div className="App">
				<Header/>
			</div>
		</ThemeProvider>
	);
}

export default App;