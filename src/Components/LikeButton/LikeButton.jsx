import React, { useState } from 'react';
import classNames from 'classnames';

import likeButtonActive from './like-button-heart_active.svg';

import './LikeButton.scss';


export function LikeButton(props) {
	const likeButtonId = props.id;
	const [isLiked, setIsLiked] = useState(
		props.likeButtonsData[likeButtonId] ?
		props.likeButtonsData[likeButtonId].isLiked :
		false
	);
	let likeButtonClasses = classNames(
		'like-button',
		{'like-button_active': isLiked}
	);
	const handleClick = () => {
		if (isLiked) {
			props.likeButtonSetUnliked(likeButtonId)
		} else {
			props.likeButtonSetLiked(likeButtonId)
		}
		setIsLiked(!isLiked)
	};

	return (
		<div className={likeButtonClasses} onClick={() => handleClick()}>
			{props.count}
			<img src={likeButtonActive} alt='like-button-heart'/>
		</div>
	)
}