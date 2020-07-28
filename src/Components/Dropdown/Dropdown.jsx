import React, {Component} from 'react';

import classNames from 'classnames';

import './Dropdown.scss';


class DropdownOption extends Component {
	handleDecrement = (event) => {
		const dropdownOptionId = event.target.parentNode.parentNode.id
		this.props.dropdownValueDecrement(dropdownOptionId)
	}
	handleIncrement = (event) => {
		const dropdownOptionId = event.target.parentNode.parentNode.id
		this.props.dropdownValueIncrement(dropdownOptionId)
	}

	render() {
		const {option} = this.props;
		const dropdownValue = this.props.dropdownsData.dropdownValues[option.id]
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
		isActive: false
	}

	toggleActive = () => {
		this.setState({
			isActive: !this.state.isActive
		})
	}

	render() {
		const {id, header, placeholder, options, hideChoiceButtons} = this.props;
		const {isActive} = this.state;

		const selectClasses = classNames(
			'dropdown__select',
			{'dropdown__select_active': isActive}
		);
		const optionsWrapClasses = classNames(
			'dropdown__options',
			{'dropdown__options_active': isActive}
		);

		return (
			<div className="dropdown" id={id}>
				<h3 className='dropdown__header'>{header}
					<span/>
				</h3>
				<div className={selectClasses} onClick={this.toggleActive}>{placeholder}
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
							<a className='clear-button' href="#">ОЧИСТИТЬ</a>
							<a className='apply-button' href="#">ПРИМЕНИТЬ</a>
						</div>
					)}
				</div>
			</div>
		)
	}
}