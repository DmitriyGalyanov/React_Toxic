import React, {Component} from 'react';

import {DatePickers} from 'Components/DatePicker/DatePicker.jsx'
import {Dropdown} from 'Components/Dropdown/Dropdown.jsx'
import {Button} from 'Components/Button/Button.jsx'

import './RoomSelection.scss';

export class RoomSelection extends Component {

	render() {

{/* <div class="room-selection"><a class="simple-button simple-button_style_filled simple-button_style_payment simple-button_style_inside-form" href="#" data-action="">ПОДОБРАТЬ НОМЕР<span></span></a></div> */}
		
		return (
			<div className='room-selection'>
				<h1 className='room-selection__header'>Найдём номера под ваши&nbsp;пожелания</h1>

				<DatePickers
					datepickerId={'main'}
					datepickersData={this.props.datepickersData}
					datepickerApply={this.props.datepickerApply}/>

				<Dropdown id='guests' header='Гости'
					options={[
						{id: 'adults', name: 'Adults', maxValue: 10},
						{id: 'children', name: 'Children', maxValue: 10},
						{id: 'babies', name: 'Babies', maxValue: 10},
					]}
					dropdownsData={this.props.dropdownsData}
					dropdownValueIncrement={this.props.dropdownValueIncrement}
					dropdownValueDecrement={this.props.dropdownValueDecrement}
					dropdownClear={this.props.dropdownClear}/>
				
					<Button label='Подобрать номер' href='#'
						insideForm filled payment/>
			</div>
		)
	}
}