import React from 'react';

import {DatePickers} from 'Components/DatePicker/DatePicker.jsx'
import {Dropdown} from 'Components/Dropdown/Dropdown.jsx'
import {Button} from 'Components/Button/Button.jsx'

import './RoomBooking.scss';

export function RoomBooking(props) {

	const {room, datepickersData, datepickerApply} = props;
	const {startDate, endDate} = datepickersData.mainDatepickerData;
	
	const residenceTime = endDate ?
		Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) :
		null;
	const defaultCost = residenceTime ?
		room.price * residenceTime :
		null;

	const discountsTotal = 2150,
				serviceTotal = 300; // those can be taken from an external source
	
	const totalCost = defaultCost ?
		defaultCost - discountsTotal + serviceTotal :
		null;

	const addSpaces = (number) => {
		const string = JSON.stringify(number);
		const modulo = string.length % 3;
		let result = [];
		result.push(string.substr(0, modulo));
		for (let counter = modulo; counter <= string.length; counter = counter + 3) {
			result.push(string.substring(counter, counter + 3))
		}
		return result.join(' ');
	};

	return (
		<div className='room-booking'>
			<h2 className='room-booking__header'>
				<p className='room-booking__header-left'>
					№ {room.id}
					{room.isLuxe && (
						<span> люкс</span>
					)}
				</p>
				<p className='room-booking__header-right'>
					{room.price}₽
					<span> в сутки</span>
				</p>
			</h2>

			<DatePickers datepickerId={'main'}
				datepickersData={datepickersData}
				datepickerApply={datepickerApply}/>

			<Dropdown id='guests' header='Гости'
				options={[
					{id: 'adults', maxValue: 10, minValue: 1},
					{id: 'children', maxValue: 10, minValue: 0},
					{id: 'babies', maxValue: 10, minValue: 0},
				]}
				dropdownsData={props.dropdownsData}
				dropdownValueIncrement={props.dropdownValueIncrement}
				dropdownValueDecrement={props.dropdownValueDecrement}
				dropdownClear={props.dropdownClear}
				dropdownApply={props.dropdownApply}/>

			{endDate && (
				<>
					<div className='cost-modifiers-list'>
					<div className='cost-modifier__item'>
						{`${room.price} x ${residenceTime} (дни пребывания)`}
						<span>{addSpaces(defaultCost)}₽</span>
					</div>
					<div className='cost-modifier__item'>
						Сбор за услуги: скидка {addSpaces(discountsTotal)}₽
						<span>- {addSpaces(discountsTotal)} ₽</span>
					</div>
					<div className='cost-modifier__item'>
						Сбор за дополнительные услуги
						<span>{addSpaces(serviceTotal)} ₽</span>
					</div>
				</div>
				<h2 className='room-booking__total-cost'>
					Итого
					<span>{addSpaces(totalCost)}₽</span>
				</h2>
			</>
			)}
			
			<Button label='Забронировать' href='/#'
				insideForm filled payment/>
		</div>
	)
}