import React, {useState} from 'react';

import classNames from 'classnames';

import './TextField.scss';


export function TextField(props) {
	const {type, placeholder, isSubscription} = props;
	let textFieldClasses = classNames(
		'text-field',
		{'text-field_subscription': isSubscription}
	);
	let textFieldWrapClasses = classNames(
		'text-field-wrap',
		{'text-field-wrap_subscription': isSubscription}
	);
	const [inputValue, setInputValue] = useState('');
	return (
		<div className={textFieldWrapClasses}>
			<input type={type}
				placeholder={placeholder}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				className={textFieldClasses}/>
			{isSubscription && (
				<button type='button' className='text-field__send-button'>
					<span>_</span>
				</button>
			)}
		</div>
	)
}