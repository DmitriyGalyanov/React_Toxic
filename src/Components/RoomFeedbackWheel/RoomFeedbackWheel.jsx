import React from 'react';

import './RoomFeedbackWheel.scss';


export function RoomFeedbackWheel(props) {
	const {votes} = props.room.feedback;
	let votesSum = 0;
	for (const [key, value] of Object.entries(votes)) {
		console.log(`${key}: ${value}`);
		votesSum += value
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
		<div className="room-feedback-wheel">
			<h2 className="room-feedback-wheel__header"></h2>
			<div className="room-feedback-wheel__content">
				<div className="room-feedback-wheel__wheel">
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
				<ul className="room-feedback-wheel__legend">
					<li className="room-feedback-wheel__legend-item room-feedback-wheel__legend-item_great">
						Великолепно
						<span>{` (${great.toFixed(2)}%)`}</span>
					</li>
					<li className="room-feedback-wheel__legend-item room-feedback-wheel__legend-item_good">
						Хорошо
						<span>{` (${good.toFixed(2)}%)`}</span>
					</li>
					<li className="room-feedback-wheel__legend-item room-feedback-wheel__legend-item_passably">
						Удовлетворительно
						<span>{` (${passably.toFixed(2)}%)`}</span>
					</li>
					<li className="room-feedback-wheel__legend-item room-feedback-wheel__legend-item_bad">
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