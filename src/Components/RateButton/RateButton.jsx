import React, {useState} from 'react';
import classNames from 'classnames';

import './RateButton.scss';

export function RateButton(props) {

	const rateButtonId = props.id;
	const rateButtonData = props.rateButtonsData[`${rateButtonId}RateButtonId`];

	const [rate, setRate] = useState(() => {
		if (rateButtonData) {
			return rateButtonData.rate
		} else return props.rate
	});
	//idk it just doesnt rerender automatically after dispatch command (through Redux-dev-tools)

	const [hovered, setHovered] = useState(rate);

	const applyRate = (starNumber) => {
		const newRate = starNumber + 1;
		setRate(newRate);
		props.rateButtonApply(rateButtonId, newRate)
	}

	const getStarsHtml = () => {
		const {starsCount} = props;
		let starsHtml = [];
		for (let starNumber = 0; starNumber < starsCount; starNumber++) {
			let starClasses = classNames(
				'rate-button__star',
				{'rate-button__star_active': starNumber < hovered}
			)
			starsHtml.push((
				<div className={starClasses}
					key={starNumber}
					onMouseEnter={() => setHovered(starNumber + 1)}
					onMouseLeave={() => setHovered(rate)}
					onClick={() => applyRate(starNumber)}
					/>
			));
		};
		return starsHtml;
	}

	return (
		<div className='rate-button-wrap'>
			{getStarsHtml()}
		</div>
	)
}