import React from 'react';

import {RoomSelection} from 'Components/RoomSelection/RoomSelection.jsx';

import './LandingPage.scss';

export class LandingPage extends React.Component {
	render() {
		return (
			<div className='landing-wrap'>
				<div className='landing-page__banner container'>
					<RoomSelection
						dropdownsData={this.props.dropdownsData}
						dropdownValueIncrement={this.props.dropdownValueIncrement}
						dropdownValueDecrement={this.props.dropdownValueDecrement}
						dropdownClear={this.props.dropdownClear}
						datepickersData={this.props.datepickersData}
						datepickerApply={this.props.datepickerApply}
					/>
					<p className='landing-page__banner-text'>
						Лучшие номера для вашей работы, отдыха и просто вдохновения
					</p>
				</div>
			</div>
		)
	}
	
}