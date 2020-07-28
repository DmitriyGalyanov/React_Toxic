import React, {Component} from 'react';

import $ from 'jquery';

import 'air-datepicker/dist/js/datepicker.js'
import 'air-datepicker/dist/css/datepicker.min.css';

import './DateDropdown.scss';


export class DateDropdown extends Component {
	componentDidMount() {
		const dateSelectFrom = document.querySelector('.date-dropdown__select_from'),
					dateSelectTo = document.querySelector('.date-dropdown__select_to');
		const dateElements = [dateSelectFrom, dateSelectTo];
		this.$el = $(this.el);
		this.$el.datepicker({
			multipleDates: 2,
			range: true,
			toggleSelected: false,
			classes: 'calendar_styler',
			multipleDatesSeparator: ' - ',
			clearButton: true,
			prevHtml: '<span></span>',
			nextHtml: '<span></span>',
			navTitles: {
				days: 'MM <i>yyyy</i>',
			},
			onSelect: (data) => {
				let dates = data.split(' - ');
				dateSelectFrom.textContent = dates[0];
				if (dates[1] == undefined) {
					dateSelectTo.textContent = 'Дата не задана';
				} else {
					dateSelectTo.textContent = dates[1];
				};
			},
		})
	}

	render() {
		return (
			<div className='date-wrap'>
				<div className="date-dropdowns-wrap">
					<div className="date-dropdown">
						<h3 className="dropdown__header"></h3>
						<div className="dropdown__select date-dropdown__select date-dropdown__select_from">
							ДД.ММ.ГГГГ</div>
							<span></span>
					</div>
					<div className="date-dropdown">
						<h3 className="dropdown__header"></h3>
						<div className="dropdown__select date-dropdown__select date-dropdown__select_to">ДД.ММ.ГГГГ</div>
						<span></span>
					</div>
				</div>
				<div className="calendar-wrap">
					<input className="calendar" ref={el => this.el = el}></input>
				</div>
				{/* */}
				{/* <input ref={el => this.el = el}/> */}
			</div>
		)
	}
}