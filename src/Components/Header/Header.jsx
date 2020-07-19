import React, {Component} from 'react';

import {StyledHeader} from './headerStyle.js'

import {Logo} from 'Components/Logo/Logo.jsx'
import {Button} from 'Components/Button/Button.jsx'



export class Header extends Component {
	render() {
		return (
			<StyledHeader>
				<Logo/>
				<Button label='Войти' hollow/>
				<Button label='Зарегистрироваться' filled/>
			</StyledHeader>
		)
	}
}