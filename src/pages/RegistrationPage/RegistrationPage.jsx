import React, {Component} from 'react';

import {Registration} from 'Components/Registration/Registration.jsx'

import './RegistrationPage.scss';


export class RegistrationPage extends Component {

	render() {
		return(
			<div className='registration-wrap'>
				<Registration/>
			</div>
		)
	}
}