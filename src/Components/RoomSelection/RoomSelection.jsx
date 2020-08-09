import React from 'react';

import {DatePickers} from 'Components/DatePicker/DatePicker.jsx'
import {Dropdown} from 'Components/Dropdown/Dropdown.jsx'
import {Button} from 'Components/Button/Button.jsx'

import './RoomSelection.scss';

export function RoomSelection(props) {

	const {datepickersData, datepickerApply,
		dropdownsData,
		dropdownValueIncrement, dropdownValueDecrement,
		dropdownClear, dropdownApply} = props;
	return (
		<div className='room-selection'>
			<h1 className='room-selection__header'>Найдём номера под ваши&nbsp;пожелания</h1>

			<DatePickers
				datepickerId={'main'}
				datepickersData={datepickersData}
				datepickerApply={datepickerApply}/>

			<Dropdown id='guests' header='Гости'
				options={[
					{id: 'adults', maxValue: 10, minValue: 1},
					{id: 'children', maxValue: 10, minValue: 0},
					{id: 'babies', maxValue: 10, minValue: 0},
				]}
				dropdownsData={dropdownsData}
				dropdownValueIncrement={dropdownValueIncrement}
				dropdownValueDecrement={dropdownValueDecrement}
				dropdownClear={dropdownClear}
				dropdownApply={dropdownApply}/>
			
				<Button label='Подобрать номер' href='/searchRoom'
					insideForm filled payment/>
		</div>
	)
	
}