import React, {useEffect} from 'react';

import {IconsTextList} from 'Components/IconsTextList/IconsTextList.jsx'
import {FeedbackWheel} from 'Components/FeedbackWheel/FeedbackWheel.jsx'
import {RoomBooking} from 'Components/RoomBooking/RoomBooking.jsx'
import {ReviewsList} from 'Components/ReviewsList/ReviewsList.jsx'
import {BulletList} from 'Components/BulletList/BulletList.jsx';

import bannerPic1 from 'images/roomDetailsBanner/bannerPic1.jpg'
import bannerPic2 from 'images/roomDetailsBanner/bannerPic2.jpg'
import bannerPic3 from 'images/roomDetailsBanner/bannerPic3.jpg';

import './RoomDetailsPage.scss';


export function RoomDetailsPage(props) {
	useEffect(() => {
		document.title = 'Room Details';

		const displayedElement = props.location.hash ?
			document.querySelector(props.location.hash) :
			null;
		if (displayedElement) {
			setTimeout(() => {
				const topOffset = displayedElement.getBoundingClientRect().top + window.pageYOffset;
				window.scrollTo({
					top: displayedElement ? (topOffset - 94) : 0,
					behavior: 'smooth'
				})
			}, 80);
		}
	}, [props.location.hash])

	const roomId = props.match.params.roomId;
	let chosenRoom = {}
	const rooms = props.roomsData.entries;
	rooms.forEach(room => {
		if (+roomId === +room.id) {
			chosenRoom = room;
		}
	});
	let bulletListItems = [];
	if (chosenRoom.allowed.pets) {
		bulletListItems.push('Можно с питомцами')
	} else {
		bulletListItems.push('Нельзя с питомцами')
	}

	if (chosenRoom.allowed.invitations) {
		bulletListItems.push('Вечеринки и мероприятия разрешены')
	} else {
		bulletListItems.push('Без вечеринок и мероприятий')
	}
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
				<FeedbackWheel
					header='Впечатления от номера'
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
				<ReviewsList room={chosenRoom} users={props.users} id='reviews'
					likeButtonsData={props.likeButtonsData}
					likeButtonSetLiked={props.likeButtonSetLiked}
					likeButtonSetUnliked={props.likeButtonSetUnliked}
				/>
				<BulletList header='Правила'
					items={bulletListItems}
					/>
				<div className='cancellation-info-wrap'>
					<h4 className='cancellation-info__header'>Отмена</h4>
					<p className='cancellation-info__text'>
						Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.
					</p>
				</div>
			</div>
		</div>
	)
}