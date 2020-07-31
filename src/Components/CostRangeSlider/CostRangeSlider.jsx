import React, {useState} from 'react';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import './CostRangeSlider.scss';


export function CostRangeSlider(props) {
	const {sliderId} = props;
	const sliderData = props.costRangeSlidersData[`${sliderId}RangeSliderData`];
	
	const [value, setValue] = useState({
		min: sliderData.lesserValue,
		max: sliderData.greaterValue})

	const applySliderData = (costRangeSliderId, lesserValue, greaterValue) => {
		props.costRangeSliderApply(costRangeSliderId, lesserValue, greaterValue)
	}

	const sliderName = `${sliderId}RangeSlider`;

	return (
		<div className='cost-range-slider-wrap'>
			<h3 className='cost-range-slider__header'>
				Диапазон цены
				<span className='range-slider__text-range' id={sliderName}>
					{`${value.min} — ${value.max}`}</span>
			</h3>
			<InputRange
				step={100}
				minValue={0}
				maxValue={15000}
				allowSameValues
				name='costSlider'
				value={value}
				onChange={value => setValue(value)}
				onChangeComplete={() => applySliderData(
					sliderId,
					value.min,
					value.max)}
			/>
			<p className='cost-range-slider__note'>Стоимость за сутки пребывания в номере</p>
		</div>
	)
}