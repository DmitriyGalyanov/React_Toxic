import React, { useState } from 'react';
import classNames from 'classnames';

import likeButtonActive from './like-button-heart_active.svg';

import './LikeButton.scss';


export function LikeButton(props) {
	const [isLiked, setIsLiked] = useState(true);
	let likeButtonClasses = classNames(
		'like-button',
		{'like-button_active': isLiked}
	)
	return (
		<div className={likeButtonClasses} onClick={() => setIsLiked(!isLiked)}>
			{props.count}
			{/* <span/> */}
			<img src={likeButtonActive} alt='like-button-heart'/>
		</div>
	)
}