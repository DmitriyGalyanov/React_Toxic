import React, {useEffect} from 'react';

import {RegistrationForm} from 'Components/RegistrationForm/RegistrationForm.jsx'

import './RegistrationPage.scss';


export function RegistrationPage() {
	useEffect(() => {
		document.title = 'Registration'
	}, [])
	
	return(
		<div className='registration-wrap'>
			<RegistrationForm/>
		</div>
	)
}