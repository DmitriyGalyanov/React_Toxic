import React from 'react';

import {RateButton} from 'Components/RateButton/RateButton.jsx';
import {ImageSlider} from 'Components/ImageSlider/ImageSlider.jsx';


import './RoomSpotlight.scss';

export function RoomSpotlight(props) {

	const imgSrcStart = `${process.env.PUBLIC_URL}/images/roomsPictures`;
	return (
		<>
			<RateButton id='test'
				starsCount={5} rate={3}
				rateButtonsData={props.rateButtonsData}
				rateButtonApply={props.rateButtonApply}
				/>
			<RateButton id='test2'
				starsCount={5} rate={3}
				rateButtonsData={props.rateButtonsData}
				rateButtonApply={props.rateButtonApply}
				/>
			<ImageSlider images={[
				{
					src: `${imgSrcStart}/roomSpotlight888_1.jpg`,
					name: 'testPic1'
				},
				{
					src: `${imgSrcStart}/roomSpotlight840_1.jpg`,
					name: 'testPic2'
				},
				{
					src: `${imgSrcStart}/roomSpotlight350_1.jpg`,
					name: 'testPic3'
				},
				{
					src: `${imgSrcStart}/roomSpotlight450_1.jpg`,
					name: 'testPic4'
				},
				]}
				/>
		</>
	)
}