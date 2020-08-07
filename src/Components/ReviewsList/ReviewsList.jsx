import React from 'react';

import {LikeButton} from 'Components/LikeButton/LikeButton.jsx';

import './ReviewsList.scss';


function Review(props) {
	const {reviewData, users} = props;
	let reviewSender;
	users.forEach(user => {
		if (user.id === reviewData.senderId) {
			reviewSender = user;
		}
	});
	return(
		<div className='reviews-list__item'>
			<div className='review-aside'>
				<img src={reviewSender.imgSrc} className='review__sender-pic'/>
				<LikeButton count={reviewData.likes}/>
			</div>
			<div className='review-text-wrap'>
				<h4 className='review__sender-name'>{reviewSender.name}</h4>
				<p className='review__date'>{reviewData.date}</p>
				<p className='review__main-text'>{reviewData.text}</p>
			</div>
		</div>
	)
}

export function ReviewsList(props) {
	const {room, users} = props;
	const {reviews} = room.feedback;
	return (
		<div className='reviews-list-wrap'>
			<h3 className='reviews-list__header'>
				{reviews.length !== 0 && (
					<>
						Отзывы посетителей номера
						<span> ({reviews.length})</span>
					</>
				)}
				{reviews.length === 0 && (
					<>
						Отзывов пока нет
						<span> Будьте первым!</span>
					</>
				)}
			</h3>
			{reviews.length !== 0 && (
				<div className='reviews-list__list'>
					{reviews.map((review, index) => {
						return <Review key={index} reviewData={review} users={users}/>
					})}
			</div>
			)}
			
		</div>
	)
}