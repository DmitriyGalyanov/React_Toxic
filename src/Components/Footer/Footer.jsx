import React, {Component} from 'react';

import {Logo} from 'Components/Logo/Logo.jsx'
import {LinksList} from 'Components/LinksList/LinksList.jsx'
import {TextField} from 'Components/TextField/TextField.jsx'
import {Socials} from 'Components/Socials/Socials.jsx'

import './Footer.scss';

export class Footer extends Component {

	render() {
		if (window.innerWidth <= 576) {
			return (
				<footer>
					<div className='footer footer_mini container'>
						<Logo/>
						<div className='footer__copyright'>
							Copyright &copy; 2018 Toxin отель. Все права защищены.
						</div>
						<Socials/>
					</div>
				</footer>
			)
		}
		return(
			<footer>
				<div className='footer container'>
					<div className='footer__top'>
						<div className='footer__logo-area'>
							<Logo/>
							<p className='footer__logo-area-text'>
								Бронирование номеров в лучшем отеле 2019 года по версии ассоциации &laquo;Отельные взгляды&raquo;
							</p>
						</div>
						<div className='footer__link-lists'>
							<LinksList header='Навигация'
								links={[
									['О нас', '#'],
									['Новости', '#'],
									['Служба поддержки', '#'],
									['Услуги', '#']
								]}/>
								<LinksList header='О нас'
								links={[
									['О сервисе', '#'],
									['Наша команда', '#'],
									['Вакансии', '#'],
									['Инвесторы', '#']
								]}/>
								<LinksList header='Служба поддержки'
								links={[
									['Соглашения', '#'],
									['Сообщества', '#'],
									['Связь с нами', '#']
								]}/>
						</div>
						<div className='footer__subscription'>
							<h3 className='subscription-header'>Подписка</h3>
							<p className='subscription-text'>
								Получайте специальные предложения и новости сервиса</p>
								<TextField type='text' placeholder='Email' isSubscription/>
						</div>
					</div>
					<div style={{width: '100vw', height: '1px', backgroundColor: '#DEDEE3', position: 'absolute', left: '0'}}/>
					<div className='footer-bottom'>
						<div className='footer__copyright'>
							Copyright &copy; 2018 Toxin отель. Все права защищены.
						</div>
						<Socials/>
					</div>
				</div>
			</footer>
		)
	}
}