import React from 'react';

import {Link} from 'react-router-dom';

import {RateButton} from 'Components/RateButton/RateButton.jsx';
import {ImageSlider} from 'Components/ImageSlider/ImageSlider.jsx';


import filter from './filterRooms.js'
import './RoomSpotlight.scss';


function RoomSpotlight(props) {
	const {roomData} = props;
	
	return (
		<div className='room-spotlight'>
			<ImageSlider images={roomData.images}/>
			<div className='room-spotlight__desc'>
				<h4 className='room-spotlight__desc-header'>
					№ {roomData.id}
					{roomData.isLuxe && (
						<span> люкс</span>
					)}
				</h4>
				<p className='room-spotlight__desc-price'>
					{roomData.price} ₽
					<span> в сутки</span>
				</p>
			</div>
			<div className='room-spotlight__feedback'>
				<RateButton id={`room${roomData.id}`}
					starsCount={5} rate={roomData.feedback.rate}
					rateButtonsData={props.rateButtonsData}
					rateButtonApply={props.rateButtonApply}
					/>

				{roomData.feedback.reviews.length !== 0 && (
					<Link to={`roomDetails/${roomData.id}#reviews`} className='room-spotlight__feedback-count'>
						Отзывы
						<span> ({roomData.feedback.reviews.length})</span>
					</Link>
				)}
				{roomData.feedback.reviews.length === 0 && (
						<Link to={`roomDetails/${roomData.id}#reviews`} className='room-spotlight__feedback-count'>
							Отзывов пока нет
						</Link>
				)}
			</div>
		</div>
	)
}

export function RoomSpotlightList(props) {
	const {rooms,
		rateButtonsData,
		rateButtonApply,
		costRangeSliderData,
		checkboxesData} = props;

		const filtersData = {
			costRangeSliderData,
			checkboxesData,
		}
	
	return (
		<div className='room-spotlights-list'>
			{
			rooms.map((roomData, index) => {
					const filtersPassed = filter(roomData, filtersData);
					if (filtersPassed) {
						return ((
							<RoomSpotlight roomData={roomData} key={index}
								rateButtonsData={rateButtonsData}
								rateButtonApply={rateButtonApply}
							/>
						))
					}
					return null;
			})}
		</div>
	)
}