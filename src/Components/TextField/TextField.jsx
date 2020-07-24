import React, {Component} from 'react';

import classNames from 'classnames';

import './TextField.scss';


export class TextField extends Component {

	render() {
		const {type, placeholder, isSubscription} = this.props;
		let textFieldClasses = classNames(
			'text-field',
			{'text-field_subscription': isSubscription}
		)
		return (
			<div className='text-field-wrap text-field-wrap_subscription'>
				<input type={type} placeholder={placeholder}
				className={textFieldClasses}/>
				{isSubscription && (
					<button type='button' className='text-field__send-button'>
						<span>_</span>
					</button>
				)}
			</div>
		)
	}
}