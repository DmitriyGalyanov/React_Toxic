import React, {Component} from 'react';

// import logo from 'public/images/logo.svg'
// import logo from '../../../public/images/logo.svg'
// import logo from '../../images/logo.svg'
import logo from './logo.svg'

export class Logo extends Component {
	

	render() {
		return (
			<a href='#' className='logo-wrap' style={{display: 'inline-block', height: '40px'}}>
				<img src={logo} alt=""/>

			</a>
		)
	}
}