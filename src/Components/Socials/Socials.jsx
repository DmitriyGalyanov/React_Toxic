import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitterSquare,
	faFacebookSquare,
	faInstagramSquare} from '@fortawesome/free-brands-svg-icons'

import './Socials.scss';


export function Socials() {
	return (
			<div className='socials'>
				<a href='https://twitter.com/'>
					<FontAwesomeIcon icon={faTwitterSquare}/>
				</a>
				<a href='https://facebook.com/'>
					<FontAwesomeIcon icon={faFacebookSquare}/>
				</a>
				<a href='https://instagram.com/'>
					<FontAwesomeIcon icon={faInstagramSquare}/>
				</a>

				<svg width="0" height="0">
					<linearGradient id="socialsGradient">
						<stop offset="0%" stopColor="#bc9cff"/>
						<stop offset="100%" stopColor="#8ba4f9"/>
					</linearGradient>
				</svg>
				<svg width="0" height="0">
					<linearGradient id="socialsHoverGradient">
						<stop offset="0%" stopColor="#8ba4f9"/>
						<stop offset="100%" stopColor="#bc9cff"/>
					</linearGradient>
				</svg>
			</div>
	)
}