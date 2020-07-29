import React, {Component} from 'react';

import {connect} from 'react-redux';

import {dropdownValueIncrement,
				dropdownValueDecrement,
				dropdownClear} from 'actions/dropdownsActions.js'

import {Header} from 'Components/Header/Header.jsx'
import {Footer} from 'Components/Footer/Footer.jsx'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {RegistrationPage} from 'pages/RegistrationPage/RegistrationPage.jsx'
import {LoginPage} from 'pages/LoginPage/LoginPage.jsx'
import {LandingPage} from 'pages/LandingPage/LandingPage.jsx'

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

	dropdownClear = (dropdownId) => {
		const {dropdownClearAction} = this.props;
		dropdownClearAction(dropdownId);
	}

	render() {
		const {dropdownsData} = this.props;
		// const props = this.props;
		return (
			<div className="App">
				<BrowserRouter>
					<Header/>
					<main>
							<Switch>
								<Route exact path='/'
									// render={() => <LandingPage {...this.props}/>}/>
									render={() => <LandingPage dropdownsData={dropdownsData}
									dropdownValueIncrement={this.dropdownValueIncrement}
									dropdownValueDecrement={this.dropdownValueDecrement}
									dropdownClear={this.dropdownClear}
									/>}/>
								<Route exact path='/registration'
									render={() => <RegistrationPage {...this.props}/>}/>
								<Route exact path='/login'
									render={() => <LoginPage {...this.props}/>}/>
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

	return ({
		dropdownsData: dropdownsData
	})
	// this return data (Object) goes to MainContainer props
}

function mapDispatchToProps(dispatch) {
	return {
		dropdownValueIncrementAction: (dropdownOptionId, dropdownId) =>
			dispatch(dropdownValueIncrement(dropdownOptionId, dropdownId)),
		dropdownValueDecrementAction: (dropdownOptionId, dropdownId) =>
			dispatch(dropdownValueDecrement(dropdownOptionId, dropdownId)),
		dropdownClearAction: (dropdownId) =>
			dispatch(dropdownClear(dropdownId)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)

// export default MainContainer;