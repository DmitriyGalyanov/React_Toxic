import React, {Component} from 'react';

// import logo from 'public/images/logo.svg'
// import logo from '../../../public/images/logo.svg'
// import logo from '../../images/logo.svg'
import logo from './logo.svg'

export class Logo extends Component {
	

	render() {
		return (
			<a className='logo-wrap' href='#' style={{display: 'inline-block'}}>
				<img src={logo} alt=""/>

			</a>
		)
	}
}