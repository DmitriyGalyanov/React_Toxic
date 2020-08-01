import React, {Component} from 'react';

import {DatePickers} from 'Components/DatePicker/DatePicker.jsx'
import {Dropdown} from 'Components/Dropdown/Dropdown.jsx'
import {Button} from 'Components/Button/Button.jsx'

import './RoomSelection.scss';

export class RoomSelection extends Component {

	render() {
		
		return (
			<div className='room-selection'>
				<h1 className='room-selection__header'>Найдём номера под ваши&nbsp;пожелания</h1>

				<DatePickers
					datepickerId={'main'}
					datepickersData={this.props.datepickersData}
					datepickerApply={this.props.datepickerApply}/>

				<Dropdown id='guests' header='Гости'
					options={[
						{id: 'adults', maxValue: 10},
						{id: 'children', maxValue: 10},
						{id: 'babies', maxValue: 10},
					]}
					dropdownsData={this.props.dropdownsData}
					dropdownValueIncrement={this.props.dropdownValueIncrement}
					dropdownValueDecrement={this.props.dropdownValueDecrement}
					dropdownClear={this.props.dropdownClear}
					dropdownApply={this.props.dropdownApply}/>
				
					<Button label='Подобрать номер' href='/searchRoom'
						insideForm filled payment/>
			</div>
		)
	}
}