import React from 'react';

import './FeedbackWheel.scss';


export function FeedbackWheel(props) {
	const {votes} = props.room.feedback;
	const {header} = props;
	let votesSum = 0;
	for (const voteData of Object.entries(votes)) {
		votesSum += voteData[1]
	}
	const coefficient = votesSum / 100;
	let indexedVotes = {};
	for (const [key, value] of Object.entries(votes)) {
		indexedVotes[key] = value / coefficient
	}
	const dividerWidth = 1;
	const {good, great, passably, bad} = indexedVotes;
	const dividerGood = good ? `${dividerWidth} ${good - dividerWidth}` : '',
		dividerGreat = great ? `${dividerWidth} ${great - dividerWidth}` : '',
		dividerPassably = passably ? `${dividerWidth} ${passably - dividerWidth}` : '',
		dividerBad = bad ? `${dividerWidth} ${bad - dividerWidth}` : '';
	return (
		<div className="feedback-wheel">
			<h2 className="feedback-wheel__header">{header}</h2>
			<div className="feedback-wheel__content">
				<div className="feedback-wheel__wheel">
					<svg className="wheel" viewBox="0 0 42 42">
						<circle className="wheel-hole"/>
						<circle className="wheel-ring"/>
						{good && (
							<circle className="wheel-segment wheel-segment_good"
								style={{
									strokeDasharray: `${good} ${100 - good}`
									}}
							/>
						)}
						{great && (
								<circle className="wheel-segment wheel-segment_great"
								style={{
									strokeDasharray: `${great} ${100 - great}`,
									strokeDashoffset: `-${good}`
							}}
							/>
						)}
						{passably && (
								<circle className="wheel-segment wheel-segment_passably"
								style={{
									strokeDasharray: `${passably} ${100 - passably}`,
									strokeDashoffset: `-${good + great}`
							}}
							/>
						)}
						{bad && (
								<circle className="wheel-segment wheel-segment_bad"
									style={{
										strokeDasharray: `${bad} ${100 - bad}`,
										strokeDashoffset: `-${+good + +great + +passably}`
									}}
								/>
						)}
						<circle className="wheel-segment wheel-segment_divider"
							style={{
								strokeDasharray: `
									${dividerGood}
									${dividerGreat}
									${dividerPassably}
									${dividerBad}`,
								strokeDashoffset: `${dividerWidth / 2}`
						}}
						/>
					</svg>
					<span>{votesSum}</span>
					<span>голосов</span>
				</div>
				<ul className="feedback-wheel__legend">
					<li className="feedback-wheel__legend-item feedback-wheel__legend-item_great">
						Великолепно
						<span>{` (${great.toFixed(2)}%)`}</span>
					</li>
					<li className="feedback-wheel__legend-item feedback-wheel__legend-item_good">
						Хорошо
						<span>{` (${good.toFixed(2)}%)`}</span>
					</li>
					<li className="feedback-wheel__legend-item feedback-wheel__legend-item_passably">
						Удовлетворительно
						<span>{` (${passably.toFixed(2)}%)`}</span>
					</li>
					<li className="feedback-wheel__legend-item feedback-wheel__legend-item_bad">
						Разочарован
						<span>{` (${bad.toFixed(2)}%)`}</span>
					</li>
					<svg className="segment-gradient">
						<linearGradient id="segmentGradient_good" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#FFE39C"/>
							<stop offset="100%" stopColor="#FFBB9C"/>
						</linearGradient>
					</svg>
				</ul>
			</div>
		</div>
	)
}