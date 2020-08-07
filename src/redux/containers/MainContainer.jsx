import React, {Component} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {connect} from 'react-redux';

import {dropdownValueIncrement,
				dropdownValueDecrement,
				dropdownClear,
				dropdownApply} from 'actions/dropdownsActions.js';
import {datepickerApply} from 'actions/datePickerActions.js';
import {costRangeSliderApply} from 'actions/costRangeSliderActions.js';
import {checkboxToggle} from 'actions/checkboxActions.js';
import {rateButtonApply} from 'actions/rateButtonActions.js';


import {Header} from 'Components/Header/Header.jsx'
import {Footer} from 'Components/Footer/Footer.jsx';
import {RegistrationPage} from 'pages/RegistrationPage/RegistrationPage.jsx'
import {LoginPage} from 'pages/LoginPage/LoginPage.jsx'
import {LandingPage} from 'pages/LandingPage/LandingPage.jsx'
import {SearchRoomPage} from 'pages/SearchRoomPage/SearchRoomPage.jsx'
import {RoomDetailsPage} from 'pages/RoomDetailsPage/RoomDetailsPage.jsx';

import roomsData from 'src/data/roomsData.js';

function PageNotFound() {
	return (<div>Page not found</div>)
}

class MainContainer extends Component {

	dropdownValueIncrement = (dropdownOptionId, dropdownId) => {
		const {dropdownValueIncrementAction} = this.props;
		dropdownValueIncrementAction(dropdownOptionId, dropdownId);
	}
	dropdownValueDecrement = (dropdownOptionId, dropdownId) => {
		const {dropdownValueDecrementAction} = this.props;
		dropdownValueDecrementAction(dropdownOptionId, dropdownId);
	}

	dropdownClear = (dropdownId, dropdownOptions) => {
		const {dropdownClearAction} = this.props;
		dropdownClearAction(dropdownId, dropdownOptions);
	}

	dropdownApply = (dropdownId, dropdownOptions) => {
		const {dropdownApplyAction} = this.props;
		dropdownApplyAction(dropdownId, dropdownOptions);
	}

	datepickerApply = (datepickerId, startDate, endDate) => {
		const {datepickerApplyAction} = this.props;
		datepickerApplyAction(datepickerId, startDate, endDate);
	}

	costRangeSliderApply = (costRangeSliderId, lesserValue, greaterValue) => {
		const {costRangeSliderApplyAction} = this.props;
		costRangeSliderApplyAction(costRangeSliderId, lesserValue, greaterValue);
	}

	checkboxToggle = (checkboxButtonId) => {
		const {checkboxToggleAction} = this.props;
		checkboxToggleAction(checkboxButtonId);
	}

	rateButtonApply = (rateButtonId, newRate) => {
		console.log(rateButtonId, newRate)
		const {rateButtonApplyAction} = this.props;
		rateButtonApplyAction(rateButtonId, newRate);
	}


	render() {
		const rooms = roomsData.entries;
		const {
			dropdownsData,
			datepickersData,
			costRangeSlidersData,
			checkboxesData,
			rateButtonsData} = this.props;
		return (
			<div className="App">
				<BrowserRouter>
					<Header/>
					<main>
							<Switch>
								<Route exact path='/'
									render={() => <LandingPage dropdownsData={dropdownsData}
									dropdownValueIncrement={this.dropdownValueIncrement}
									dropdownValueDecrement={this.dropdownValueDecrement}
									dropdownClear={this.dropdownClear}
									dropdownApply={this.dropdownApply}
									datepickersData={datepickersData}
									datepickerApply={this.datepickerApply}
									/>}/>
								<Route exact path='/registration'
									render={() => <RegistrationPage {...this.props}/>}/>
								<Route exact path='/login'
									render={() => <LoginPage {...this.props}/>}/>
								<Route exact path='/searchRoom'
									render={() => <SearchRoomPage
									datepickersData={datepickersData}
									datepickerApply={this.datepickerApply}

									dropdownsData={dropdownsData}
									dropdownValueIncrement={this.dropdownValueIncrement}
									dropdownValueDecrement={this.dropdownValueDecrement}
									dropdownClear={this.dropdownClear}
									dropdownApply={this.dropdownApply}

									costRangeSlidersData={costRangeSlidersData}
									costRangeSliderApply={this.costRangeSliderApply}

									checkboxesData={checkboxesData}
									checkboxToggle={this.checkboxToggle}

									rateButtonsData={rateButtonsData}
									rateButtonApply={this.rateButtonApply}

									rooms={rooms}
									/>}/>
								<Route exact path='/roomDetails/:roomId([0-9]+)'
									render={(props) => <RoomDetailsPage
										{...props}
										rooms={rooms}
										dropdownsData={dropdownsData}
										dropdownValueIncrement={this.dropdownValueIncrement}
										dropdownValueDecrement={this.dropdownValueDecrement}
										dropdownClear={this.dropdownClear}
										dropdownApply={this.dropdownApply}
										datepickersData={datepickersData}
										datepickerApply={this.datepickerApply}
									/>}/>

								
								<Route path='*'
									component={PageNotFound}/>
							</Switch>
					</main>
					<Footer/>
					</BrowserRouter>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	const dropdownsData = state.dropdownsData.entries;
	const datepickersData = state.datepickersData.entries;
	const costRangeSlidersData = state.costRangeSlidersData.entries;
	const checkboxesData = state.checkboxesData.entries;
	const rateButtonsData = state.rateButtonsData.entries;

	return ({
		dropdownsData: dropdownsData,
		datepickersData: datepickersData,
		costRangeSlidersData: costRangeSlidersData,
		checkboxesData: checkboxesData,
		rateButtonsData: rateButtonsData
	})
	// this return data (Object) goes to MainContainer props
}

function mapDispatchToProps(dispatch) {
	return {
		dropdownValueIncrementAction: (dropdownOptionId, dropdownId) =>
			dispatch(dropdownValueIncrement(dropdownOptionId, dropdownId)),
		dropdownValueDecrementAction: (dropdownOptionId, dropdownId) =>
			dispatch(dropdownValueDecrement(dropdownOptionId, dropdownId)),
		dropdownClearAction: (dropdownId, dropdownOptions) =>
			dispatch(dropdownClear(dropdownId, dropdownOptions)),
		dropdownApplyAction: (dropdownId, dropdownOptions) =>
			dispatch(dropdownApply(dropdownId, dropdownOptions)),

		datepickerApplyAction: (datepickerId, startDate, endDate) =>
			dispatch(datepickerApply(datepickerId, startDate, endDate)),

		costRangeSliderApplyAction: (costRangeSliderId, lesserValue, greaterValue) =>
			dispatch(costRangeSliderApply(costRangeSliderId, lesserValue, greaterValue)),

		checkboxToggleAction: (checkboxButtonId) =>
			dispatch(checkboxToggle(checkboxButtonId)),

		rateButtonApplyAction: (rateButtonId, newRate) =>
			dispatch(rateButtonApply(rateButtonId, newRate)),

		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)