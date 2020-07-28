import React, {Component} from 'react';

import './RadioButtons.scss';


export class RadioButtons extends Component {
	render() {
		const {name, buttons} = this.props;
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
}