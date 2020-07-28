import React from 'react';

import {LoginForm} from 'Components/LoginForm/LoginForm.jsx'

import './LoginPage.scss';

export function LoginPage() {
	return (
		<div className='login-wrap'>
			<LoginForm/>
		</div>
	)
}