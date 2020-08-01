import React, { useState } from 'react';
import classNames from 'classnames';

import './ImageSlider.scss';


export function ImageSlider(props) {

	const {images} = props;
	const [activeImg, setActiveImg] = useState(1);

	const choosePrevImg = () => {
		if (activeImg > 0) {
			setActiveImg(activeImg - 1)
		} else if (activeImg === 0) {
			setActiveImg(images.length - 1)
		}
	};
	const chooseNextImg = () => {
		if (activeImg < images.length - 1) {
			setActiveImg(activeImg + 1)
		} else if (activeImg === images.length - 1) {
			setActiveImg(0)
		}
	};

	return (
		<div className='image-slider-wrap'>
			<div className='image-slider__controls'>
				<div className='image-slider__nav-button image-slider__nav-button_prev'
					onClick={() => choosePrevImg()}>
					<span/>
				</div>
				<div className='image-slider__nav-button image-slider__nav-button_next'
					onClick={() => chooseNextImg()}>
					<span/>
				</div>
			</div>
			{images.map((image, index) => {
				let imageWrapClasses = classNames(
					'image-slider__image-wrap',
					{'image-slider__image-wrap_active': index === activeImg},
					{'image-slider__image-wrap_prev': index + 1 === activeImg},
					{'image-slider__image-wrap_next': index - 1 === activeImg}
				);
				if (activeImg === 0 && index === images.length - 1) {
					imageWrapClasses += ' image-slider__image-wrap_prev'
				};
				if (activeImg === images.length - 1 && index === 0) {
					imageWrapClasses += ' image-slider__image-wrap_next'
				};
				return ((
					<div className={imageWrapClasses}
						key={index} data-image-number={index}>
						<img src={image.src} alt={image.name}/>
					</div>
				))
			})}
		</div>
	)
}