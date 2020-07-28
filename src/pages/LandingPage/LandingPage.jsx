import React from 'react';

import {RoomSelection} from 'Components/RoomSelection/RoomSelection.jsx';

import './LandingPage.scss';

export class LandingPage extends React.Component {
	render() {
		return (
			<div className='landing-wrap'>
				<RoomSelection
					dropdownsData={this.props.dropdownsData}
					dropdownValueIncrement={this.props.dropdownValueIncrement}
					dropdownValueDecrement={this.props.dropdownValueDecrement}
				/>
			</div>
		)
	}
	
}