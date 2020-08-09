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
					<span className='socials-svg socials-svg_default'>
						<FontAwesomeIcon icon={faTwitterSquare}/>
					</span>
					<span className='socials-svg socials-svg_hovered'>
						<FontAwesomeIcon icon={faTwitterSquare}/>
					</span>
				</a>
				<a href='https://facebook.com/'>
					<span className='socials-svg socials-svg_default'>
						<FontAwesomeIcon icon={faFacebookSquare}/>
					</span>
					<span className='socials-svg socials-svg_hovered'>
						<FontAwesomeIcon icon={faFacebookSquare}/>
					</span>
				</a>
				<a href='https://instagram.com/'>
					<span className='socials-svg socials-svg_default'>
						<FontAwesomeIcon icon={faInstagramSquare}/>
					</span>
					<span className='socials-svg socials-svg_hovered'>
						<FontAwesomeIcon icon={faInstagramSquare}/>
					</span>
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