import React, {Component} from 'react';

import {DateDropdown} from 'Components/DateDropdown/DateDropdown.jsx'
import {Dropdown} from 'Components/Dropdown/Dropdown.jsx'

import './RoomSelection.scss';

export class RoomSelection extends Component {

	render() {

		return (
			<>
			<DateDropdown/>

			<Dropdown id='dropdown_guests' header='Гости' placeholder='Сколько гостей?'
				options={[
					{id: 'adults', name: 'Взрослые', maxValue: 10},
					{id: 'children', name: 'Дети', maxValue: 10},
					{id: 'babies', name: 'Младенцы', maxValue: 10},
				]}
				dropdownsData={this.props.dropdownsData}
				dropdownValueIncrement={this.props.dropdownValueIncrement}
				dropdownValueDecrement={this.props.dropdownValueDecrement}/>
			</>
		)
	}
}