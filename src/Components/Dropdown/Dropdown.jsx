import React, {Component} from 'react';

import classNames from 'classnames';

import './Dropdown.scss';


class DropdownOption extends Component {
	handleDecrement = (event) => {
		const dropdownOptionId = event.target.parentNode.parentNode.id
		const dropdownId = event.target.parentNode.parentNode.parentNode.parentNode.id
		this.props.dropdownValueDecrement(dropdownOptionId, dropdownId)
	}
	handleIncrement = (event) => {
		const dropdownOptionId = event.target.parentNode.parentNode.id
		const dropdownId = event.target.parentNode.parentNode.parentNode.parentNode.id
		this.props.dropdownValueIncrement(dropdownOptionId, dropdownId)
	}

	render() {
		const {option, dropdownData} = this.props;
		const dropdownValue = dropdownData.values[option.id];
		const optionName = dropdownData.names[option.id];
		return (
			<div className="dropdown__option" id={option.id} value={dropdownValue}>{optionName}
				<div className="dropdown__buttons">
					<button type="button"
					disabled={dropdownValue <= option.minValue}
					onClick={this.handleDecrement}>-</button>
						<span>{dropdownValue}</span>
					<button type="button"
					disabled={dropdownValue >= option.maxValue}
					onClick={this.handleIncrement}>+</button>
				</div>
			</div>
		)
	}
}

export class Dropdown extends Component {
	state = {
		isOpen: false
	}

	toggleActive = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	dropdownClear = (event) => {
		const dropdownId = event.target.parentNode.parentNode.parentNode.id;
		const dropdownOptions = this.props.options;
		this.props.dropdownClear(dropdownId, dropdownOptions);
	}

	dropdownApply = (event) => {
		this.toggleActive()
		const dropdownId = event.target.parentNode.parentNode.parentNode.id;
		const dropdownOptions = this.props.options;
		this.props.dropdownApply(dropdownId, dropdownOptions);
	}

	render() {
		const {id, header, options, hideChoiceButtons} = this.props;
		const dropdownData = this.props.dropdownsData[`${id}DropdownData`]
		const lowerHeader = dropdownData.header;

		const mainOptionId = dropdownData.mainOptionId ?
		dropdownData.mainOptionId : 'Main Option Doesn\'t exist';

		const dropdownValues = dropdownData.values;

		let mainOptionValue = 1,
				mainOptionNumber = null;
		let isClearable = false;
		let optionsCounter = 0;
		for (let [optionId, optionValue] of Object.entries(dropdownValues)) {
			if (mainOptionId === optionId) {
				mainOptionValue = optionValue
				mainOptionNumber = optionsCounter
			}
			if (optionValue > options[optionsCounter].minValue) {
				isClearable = true;
			}
			optionsCounter++;
		};
		let isApplicable = true;
		if (mainOptionNumber !== null) {
			if (mainOptionValue < options[mainOptionNumber].minValue) {
				isApplicable = false;
			};
		}
		

		const {isOpen} = this.state;

		const selectClasses = classNames(
			'dropdown__select',
			{'dropdown__select_active': isOpen}
		);
		const optionsWrapClasses = classNames(
			'dropdown__options',
			{'dropdown__options_active': isOpen}
		);
		const clearButtonClasses = classNames(
			'clear-button',
			{'clear-button_disabled': !isClearable}
		);
		const applyButtonClasses = classNames(
			'apply-button',
			{'apply-button_disabled': !isApplicable}
		);

		return (
			<div className="dropdown" id={id}>
				<h3 className='dropdown__header'>{header}
					<span/>
				</h3>
				<div className={selectClasses} onClick={this.toggleActive}>{lowerHeader}
					<span/>
				</div>
				<div className={optionsWrapClasses}>
					{options.map((option, index) => {
						return (
							<DropdownOption key={index} option={option}
								dropdownData={this.props.dropdownsData[id + 'DropdownData']}
								dropdownValueIncrement={this.props.dropdownValueIncrement}
								dropdownValueDecrement={this.props.dropdownValueDecrement}
							/>
						)
					})}
					{!hideChoiceButtons && (
						<div className='dropdown__choice-buttons'>
							<button className={clearButtonClasses} disabled={!isClearable}
								onClick={this.dropdownClear}>ОЧИСТИТЬ</button>
							<button className={applyButtonClasses} disabled={!isApplicable}
								onClick={this.dropdownApply}>ПРИМЕНИТЬ</button>
						</div>
					)}
				</div>
			</div>
		)
	}
}