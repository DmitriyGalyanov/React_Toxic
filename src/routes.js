import React from 'react';

import {RegistrationPage} from 'pages/RegistrationPage/RegistrationPage.jsx'

function PageNotFound() {
	return (<div>Page not found</div>)
}

export const routes = [
	// {
	// 	path: '/',
	// 	exact: true,
	// 	component: <Landing/>
	// },
	{
		path:'/registration',
		exact: true,
		component: RegistrationPage
	},
	{
		path: '*',
		exact: false,
		component: PageNotFound
	}
]