import React, {Component} from 'react';

import {TextField} from 'Components/TextField/TextField.jsx'
import {RadioButtons} from 'Components/RadioButtons/RadioButtons.jsx'
import {ToggleButton} from 'Components/ToggleButton/ToggleButton.jsx'
import {Button} from 'Components/Button/Button.jsx'

import './Registration.scss';


export class Registration extends Component {

	render() {
		return (
			<div className='registration'>
				<h1 className='registration__header'>Регистрация аккаунта</h1>
				<form className='registration__form'>
					<div className='registration__form-top'>
						<TextField type='text' placeholder='Имя'/>
						<TextField type='text' placeholder='Фамилия'/>
						<RadioButtons name='gender'
							buttons={[
								['male', 'Мужчина'],
								['female', 'Женщина']
							]}/>
					</div>
					<h2 class='registration__lower-header'>Дата рождения</h2>
					<TextField type='text' placeholder='ДД.ММ.ГГГГ'/>
					<div class='registration__form-bottom'>
						<h2 class='registration__lower-header'>Данные для входа в сервис</h2>
						<TextField type='text' placeholder='Email'/>
						<TextField type='password' placeholder='Пароль'/>
						<ToggleButton header='Получать специальные предложения'
							id='specialOffers' name='specialOffers' value='specialOffers'/>
					</div>
					<Button filled payment insideForm 
						label='Перейти к оплате' href='#'/>
				</form>
				<p className='registration__for-registered-users'>
					Уже есть аккаунт на Toxin
					<Button hollow inside-form label='Войти' href='#'/>
				</p>
			</div>
		)
	}
}