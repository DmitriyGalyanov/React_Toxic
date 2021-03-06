import React from 'react';

import './ToggleButton.scss';


export function ToggleButton(props) {

	const {header, id, name, value} = props;
	return (
		<div className='toggle-button'>
			<label className='toggle-button__label'>
				<input className='toggle-button__button' type='checkbox'
				id={id} name={name} value={value}/>
				<span className='toggle-button__slider'/>
			</label>
	<h3 className='toggle-button__header'>{header}</h3>
		</div>
	)
}