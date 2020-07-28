import React from 'react';

import {RegistrationForm} from 'Components/RegistrationForm/RegistrationForm.jsx'

import './RegistrationPage.scss';


export function RegistrationPage() {
	return(
		<div className='registration-wrap'>
			<RegistrationForm/>
		</div>
	)
}