import React from 'react';

import {TextField} from 'Components/TextField/TextField.jsx'
import {Button} from 'Components/Button/Button.jsx'

import './LoginForm.scss'

export function LoginForm() {
	return (
		<div className='login-form'>
			<form className='login-form__form'>
				<h1 className='login-form__header'>Войти</h1>
			<div className='login-form__input-block'>
				<TextField type='text' placeholder='Email'/>
				<TextField type='password' placeholder='Пароль'/>
			</div>
			<Button label='Войти' href='/' filled payment insideForm/>
			</form>
			<p className='login-form__for-new-users'>
				Нет аккаунта на Toxin?
				<Button label='Создать' href='/registration' hollow insideForm/>
			</p>
		</div>
	)
}