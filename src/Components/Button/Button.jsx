import React, {Component} from 'react';

import classNames from 'classnames';

import {Link} from 'react-router-dom';

// import {StyledButton} from './buttonStyles.js';
import './Button.scss';

export class Button extends Component {

	render() {
		const {label, href, insideForm, filled, hollow, payment} = this.props;
		let buttonClasses = classNames(
			'button',
			{'button_inside-form': insideForm},
			{'button_filled': filled},
			{'button_hollow': hollow},
			{'button_payment': payment}
		)
		return (
		<Link to={href} className={buttonClasses}>
			{label}
			{payment && (
				<span/>
			)}
		</Link>);
	}
}



// export class Button extends Component {

// 	render() {
// 		const props = this.props;
// 		return (
// 		<StyledButton {...props}>
// 			{this.props.label}
// 			{this.props.payment && (
// 				<span/>
// 			)}
// 		</StyledButton>);
// 	}
// }