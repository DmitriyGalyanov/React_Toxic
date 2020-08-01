import React from 'react';

import {DatePickers} from 'Components/DatePicker/DatePicker.jsx';
import {Dropdown} from 'Components/Dropdown/Dropdown.jsx';
import {CostRangeSlider} from 'Components/CostRangeSlider/CostRangeSlider.jsx';
import {Checkbox} from 'Components/Checkbox/Checkbox.jsx';

import {RoomSpotlight} from 'Components/RoomSpotlight/RoomSpotlight.jsx'

import './SearchRoomPage.scss';


export function SearchRoomPage(props) {
	
	return (
		<div className='search-room-wrap container'>
			<aside className='search-room__aside'>
				<DatePickers datepickerId={'main'}
					datepickersData={props.datepickersData}
					datepickerApply={props.datepickerApply}
					singleInput/>
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
				<CostRangeSlider {...props} sliderId='main'/>
				<Checkbox {...props} header={'Основные удобства'}
					options={[
						{label: 'Можно курить',
						key: 'smoking'},
						{label: 'Можно с питомцами',
						key: 'pets'},
						{label: 'Можно пригласить гостей (до 10 человек)',
						key: 'invitations'}
					]}/>
					<Checkbox {...props} header={'Доступность'}
					options={[
						{label: 'Широкий корридор',
						description: 'Ширина коридоров в номере не менее 91 см.',
						key: 'wideCorridors'},
						{label: 'Помощник для инвалидов',
						description: 'На 1 этаже вас встретит специалист  и проводит до номера.',
						key: 'disabledAssistance'}
					]}/>
				<Dropdown id='roomAmenities' header='Удобства номера'
					options={[
						{id: 'bedrooms', maxValue: 3, minValue: 1},
						{id: 'beds', maxValue: 6, minValue: 1},
						{id: 'bathrooms', maxValue: 4, minValue: 1},
					]}
					dropdownsData={props.dropdownsData}
					dropdownValueIncrement={props.dropdownValueIncrement}
					dropdownValueDecrement={props.dropdownValueDecrement}
					dropdownClear={props.dropdownClear}
					dropdownApply={props.dropdownApply}/>
					<Checkbox {...props} header={'Дополнительные удобства'}
					options={[
						{label: 'Завтрак',
						key: 'breakfast'},
						{label: 'Письменный стол',
						key: 'desk'},
						{label: 'Стул для кормления',
						key: 'feedingChair'},
						{label: 'Кроватка',
						key: 'crib'},
						{label: 'Телевизор',
						key: 'tv'},
						{label: 'Шампунь',
						key: 'shampoo'}
					]}/>
			</aside>
			<RoomSpotlight
				rateButtonsData={props.rateButtonsData}
				rateButtonApply={props.rateButtonApply}/>
		</div>

	)
}