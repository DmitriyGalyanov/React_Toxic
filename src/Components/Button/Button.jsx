import React, {Component} from 'react';

import {StyledButton} from './buttonStyles.js';

export class Button extends Component {

	render() {
		const props = this.props;
		return (
		<StyledButton {...props}>
			{this.props.label}
		</StyledButton>);
	}
}