import React from 'react';

import {IconsTextList} from 'Components/IconsTextList/IconsTextList.jsx'
import {RoomFeedbackWheel} from 'Components/RoomFeedbackWheel/RoomFeedbackWheel.jsx'
import {RoomBooking} from 'Components/RoomBooking/RoomBooking.jsx';

import bannerPic1 from 'images/roomDetailsBanner/bannerPic1.jpg'
import bannerPic2 from 'images/roomDetailsBanner/bannerPic2.jpg'
import bannerPic3 from 'images/roomDetailsBanner/bannerPic3.jpg';

import './RoomDetailsPage.scss';


export function RoomDetailsPage(props) {
	const roomId = props.match.params.roomId;
	let chosenRoom = {}
	props.rooms.forEach(room => {
		if (+roomId === +room.id) {
			chosenRoom = room;
		}
	});
	return (
		<div className='room-details-wrap'>
			<div className='room-details__banner'>
				<img src={bannerPic1} alt=""/>
				<img src={bannerPic2} alt=""/>
				<img src={bannerPic3} alt=""/>
			</div>
			<div className='room-details__main container'>
				<IconsTextList
					header='Сведения о номере'
					attributes={chosenRoom.comfortAttributes}
					/>
				<RoomFeedbackWheel
					room={chosenRoom}/>
				<RoomBooking
					room={chosenRoom}
					dropdownsData={props.dropdownsData}
					dropdownValueIncrement={props.dropdownValueIncrement}
					dropdownValueDecrement={props.dropdownValueDecrement}
					dropdownClear={props.dropdownClear}
					dropdownApply={props.dropdownApply}
					datepickersData={props.datepickersData}
					datepickerApply={props.datepickerApply}
					/>
			</div>
		</div>
	)
}