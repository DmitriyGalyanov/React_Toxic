import React, {Component} from 'react';
import classNames from 'classnames';

import {Logo} from 'Components/Logo/Logo.jsx'
import {Button} from 'Components/Button/Button.jsx'
import {CustomLink} from 'Components/CustomLink/CustomLink.jsx'

import './Header.scss';


export class Header extends Component {
	state = {
		navMenuOpened: false
	};

	openNavMenu = () => {
		this.setState({
			navMenuOpened: !this.state.navMenuOpened
		})
	};


	render() {
		let openNavButtonClasses = classNames(
			'header__nav-open-button',
			{'active': this.state.navMenuOpened}
		);
		let navOpened = classNames(
			'header__nav',
			{'active': this.state.navMenuOpened}
		);

		const userName = 'Пользователь';
		const isLogged = false; // will come from props later

		return (
			<header>
				<div className='header container'>
					<Logo/>
					<div className={openNavButtonClasses} onClick={this.openNavMenu}>
						<span className='bar bar1'/>
						<span className='bar bar2'/>
						<span className='bar bar3'/>
					</div>
					<nav className={navOpened}>
						<CustomLink href='#' label='О нас'/>
						<CustomLink expandable href='#' label='Услуги'
						insideLinks={{'github': 'https://github.com/DmitriyGalyanov',
												'instagram': 'https://www.instagram.com/'}}/>
						<CustomLink href='#' label='Вакансии'/>
						<CustomLink href='#' label='Новости'/>
						<CustomLink expandable href='#' label='Соглашения'
						insideLinks={{'github': 'https://github.com/DmitriyGalyanov',
												'instagram': 'https://www.instagram.com/'}}/>
					</nav>
					{!isLogged && (
						<div className='header__buttons'>
							<Button href='/login' label='Войти' hollow/>
							<Button href='/registration' label='Зарегистрироваться' filled/>
						</div>
					)}
					{isLogged && (
						<div className='user-info'>
							<CustomLink href='#' label={userName}/> {/* link to profile */}
							<Button href='#' label='Выйти' hollow/>
						</div>
					)}
					
				</div>
			</header>
		)
	}
}