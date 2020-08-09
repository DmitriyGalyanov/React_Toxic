import React from 'react';

import {RoomSelection} from 'Components/RoomSelection/RoomSelection.jsx';

import './LandingPage.scss';

export function LandingPage(props) {
	const {dropdownsData,
		dropdownValueIncrement, dropdownValueDecrement,
		dropdownClear, dropdownApply,
		datepickersData, datepickerApply} = props;
	return (
		<div className='landing-wrap'>
			<div className='landing-page__banner container'>
				<RoomSelection
					dropdownsData={dropdownsData}
					dropdownValueIncrement={dropdownValueIncrement}
					dropdownValueDecrement={dropdownValueDecrement}
					dropdownClear={dropdownClear}
					dropdownApply={dropdownApply}
					datepickersData={datepickersData}
					datepickerApply={datepickerApply}
				/>
				<p className='landing-page__banner-text'>
					Лучшие номера для вашей работы, отдыха и просто вдохновения
				</p>
			</div>
		</div>
	)
}