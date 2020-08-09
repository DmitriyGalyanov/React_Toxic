import React from 'react';

import classNames from 'classnames';

import {Link} from 'react-router-dom';

import './Button.scss';

export function Button(props) {

	const {label, href, insideForm, filled, hollow, payment} = props;
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