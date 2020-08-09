import React from 'react';

import logo from './logo.svg'

export function Logo() {
	return (
		<a href='/' className='logo-wrap' style={{display: 'inline-block', height: '40px'}}>
			<img src={logo} alt=""/>
		</a>
	)
}