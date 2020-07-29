import React, {Component} from 'react';

import {DateDropdown} from 'Components/DateDropdown/DateDropdown.jsx'
import {Dropdown} from 'Components/Dropdown/Dropdown.jsx'

import './RoomSelection.scss';

export class RoomSelection extends Component {

	render() {

		return (
			<>
			<DateDropdown/>

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
			</>
		)
	}
}