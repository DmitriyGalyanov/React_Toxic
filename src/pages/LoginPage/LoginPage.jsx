import React, {useEffect} from 'react';

import {LoginForm} from 'Components/LoginForm/LoginForm.jsx'

import './LoginPage.scss';

export function LoginPage() {
	useEffect(() => {
		document.title = 'Login'
	}, [])
	
	return (
		<div className='login-wrap'>
			<LoginForm/>
		</div>
	)
}