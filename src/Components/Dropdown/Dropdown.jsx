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
		const {option} = this.props;
		const dropdownValue = this.props.dropdownsData.guestsDropdownData.values[option.id]
		return (
			<div className="dropdown__option" id={option.id} value={dropdownValue}>{option.name}
				<div className="dropdown__buttons">
					<button type="button"
					disabled={dropdownValue <= 0}
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
		this.props.dropdownClear(dropdownId);
	}

	render() {
		const {id, header, options, hideChoiceButtons} = this.props;
		const lowerHeader = this.props.dropdownsData[id + 'DropdownData'].header;
		// const mainOptionId = this.props.dropdownsData[id + 'DropdownData'].mainOptionId;

		const mainOptionId = this.props.dropdownsData[id + 'DropdownData'].mainOptionId ?
		this.props.dropdownsData[id + 'DropdownData'].mainOptionId : 'Main Option';

		const dropdownValues = this.props.dropdownsData[id + 'DropdownData'].values;

		let mainOptionValue = 1;
		let isClearable = false;
		for (let [optionId, optionValue] of Object.entries(dropdownValues)) {
			if (mainOptionId === optionId) {
				mainOptionValue = optionValue
			}
			if (optionValue > 0) {
				isClearable = true;
			}
		};
		let isApplicable = true;
		if (mainOptionValue < 1) {
			isApplicable = false;
		};

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
								dropdownsData={this.props.dropdownsData}
								dropdownValueIncrement={this.props.dropdownValueIncrement}
								dropdownValueDecrement={this.props.dropdownValueDecrement}
							/>
						)
					})}
					{!hideChoiceButtons && (
						<div className='dropdown__choice-buttons'>
							<button className={clearButtonClasses} disabled={!isClearable}
								onClick={this.dropdownClear}>ОЧИСТИТЬ</button>
							<button className={applyButtonClasses} disabled={!isApplicable}>ПРИМЕНИТЬ</button>
						</div>
					)}
				</div>
			</div>
		)
	}
}