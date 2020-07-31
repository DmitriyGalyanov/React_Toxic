import React, { useState } from 'react';
import classNames from 'classnames';

import './Checkbox.scss';


export function Checkbox(props) {
	const {
		header, options,
		checkboxesData, checkboxToggle} = props;

	const [isVisible, toggleVisibility] = useState(false);
	const [buttonsWrapHeight, toggleButtonsWrapHeight] = useState(0);
	const [buttonsWrapScaleY, toggleButtonsWrapScaleY] = useState(0);

	const expandButtons = (event) => {
		const expandedHeight = event.currentTarget.nextSibling.scrollHeight
		if (buttonsWrapHeight === 0) {
			toggleButtonsWrapHeight(expandedHeight)
			toggleButtonsWrapScaleY(1)
		} else {
			toggleButtonsWrapHeight(0)
			toggleButtonsWrapScaleY(0)
		}
		toggleVisibility(!isVisible)
	}

	let checkboxWrapClasses = classNames(
		'checkbox-wrap',
		{'checkbox-wrap_active': isVisible}
	);

	return (
		<div className={checkboxWrapClasses}>
			<h3 className='checkbox__header' onClick={(e) => expandButtons(e)}>
				{header}
				<span></span>
			</h3>
			<div className='checkbox__buttons' style={{
				height: buttonsWrapHeight,
				transform: `scaleY(${buttonsWrapScaleY})`
				}}>
				{options.map((option, index) => {
					return (
						<div key={index}>
							<label className='checkbox__button'
								htmlFor={`allow_${option.key}`}>
								{option.label}
								<input type='checkbox' name={`allow_${option.key}`}
									id={`allow_${option.key}`}
									defaultChecked={checkboxesData[option.key]}
									onClick={() => checkboxToggle(option.key)}/>
							</label>
							{option.description && (
								<p className='checkbox__description'>
									{option.description}
								</p>
							)}
						</div>
					)
				})}
			</div>
		</div>
	)
}