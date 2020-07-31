import React, {useState} from 'react';
import classNames from 'classnames';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import './DatePicker.scss';
registerLocale('ru', ru);


export function DatePickers(props) {

	const [startDate, setStartDate] = useState(
		props.datepickersData[props.datepickerId + 'DatepickerData'].startDate
	);
	const [endDate, setEndDate] = useState(
		props.datepickersData[props.datepickerId + 'DatepickerData'].endDate
	);
	const onChange = dates => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	const startTimeDay = startDate.getDate() > 9 ? `${startDate.getDate()}` :
		`0${startDate.getDate()}`;
	const startTimeMonth = startDate.getMonth()+1 > 9 ? `${startDate.getMonth()+1}` :
		`0${startDate.getMonth()+1}`;

	const startTime = `${startTimeDay}.${startTimeMonth}.${startDate.getFullYear()}`;

	let endTime = 'ДД.ММ.ГГГГ'
	if (endDate !== null) {
		let endTimeDay = endDate.getDate() > 9 ? `${endDate.getDate()}` :
			`0${endDate.getDate()}`;
		let endTimeMonth = endDate.getMonth()+1 > 9 ? `${endDate.getMonth()+1}` :
			`0${endDate.getMonth()+1}`;

		endTime = `${endTimeDay}.${endTimeMonth}.${endDate.getFullYear()}`
	};

	const [isCalendarVisible, toggleCalendarVisibility] = useState(false);
	let calendarClassNames = classNames(
		'calendar',
		'calendar_styler',
		{'calendar_hide': !isCalendarVisible},
		{'calendar_show': isCalendarVisible}
	);
	
	let datePickerClearButtonClasses = classNames(
		'date-picker__button',
		'date-picker__button_apply',
		{'date-picker__button_apply_disabled': endDate === null}
	);

	const CalendarWrap = ({className, children}) => {
		return (
			<div className={className}>
				{children}
				<div className="datepicker__buttons">
					<button className='date-picker__button date-picker__button_clear'
						onClick={() => {
							setStartDate(new Date())
							setEndDate(null)
						}}>
							Очистить</button>
					<button className={datePickerClearButtonClasses}
						disabled={endDate === null}
						onClick={() => {
							toggleCalendarVisibility(false)
							props.datepickerApply(props.datepickerId, startDate, endDate)
						}}>
							Применить</button>
				</div>
			</div>
		);
	};

	return (
		<div className='date-picker-wrap'>
			<div className='date-dropdowns-wrap'>
				<div className='date-dropdown'>
					<h3 className='date-dropdown__header'> Прибытие </h3>
					<div className="date-dropdown__select"
						onClick={() => toggleCalendarVisibility(!isCalendarVisible)}>
						{startTime}
					</div>
				</div>

				<div className='date-dropdown'>
					<h3 className='date-dropdown__header'> Выезд </h3>
					<div className="date-dropdown__select"
						onClick={() => toggleCalendarVisibility(!isCalendarVisible)}>
						{endTime}
					</div>
				</div>
			</div>
			<DatePicker
				selected={startDate}
				onChange={onChange}
				minDate={new Date()}
				// {/* check if that would trigger error after visiting later than chosen time*/}
				startDate={startDate}
				endDate={endDate}
				selectsRange
				inline
				calendarClassName={calendarClassNames}
				calendarContainer={CalendarWrap}
				locale="ru"
			/>
		</div>
	);
}