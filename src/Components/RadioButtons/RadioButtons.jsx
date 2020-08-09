import React from 'react';

import './RadioButtons.scss';


export function RadioButtons(props) {
	const {name, buttons} = props;
	return (
		<div className='radio-buttons'>
			{buttons.map((button, index) => {
				return (
					<label key={index} className='radio-buttons__label' htmlFor={button[0]}>
						{button[1]}
						<input className='radio-buttons__button' type='radio'
						name={name} value={button[0]} id={button[0]}/>
					</label>
				)
			})}
		</div>
	)
}