import React, {Component} from 'react';

import './Link.scss';

export class Link extends Component {
	state= {
		optionsHeight: '0'
	}
	getLinkOptions = () => {
		const {insideLinks} = this.props;
		let linksHtml = [];
		let key=0;
		for (let [label, href] of Object.entries(insideLinks)) {
			linksHtml.push((
				<a href={href} className='link-option link' key={key}>{label}</a>
			));
			key++;
		};
		return linksHtml;
	}

	expandLink = (event) => {
		const {optionsHeight} = this.state;
		if (optionsHeight === '0') {
			this.setState({
				optionsHeight: event.target.nextSibling.scrollHeight
			})
		} else {
			this.setState({
				optionsHeight: '0'
			})
		}
	}

	render() {
		const {href, label, expandable} = this.props;
		const {optionsHeight} = this.state;

		if (expandable) {
			return (
				<div className='link-wrap'>
					<a href={href} className='link'>
						{label}
					</a>
					<span className='expand-link-button'
					onClick={this.expandLink}/>
					<div className='link-options' style={{height: optionsHeight}}>
						{this.getLinkOptions()}
					</div>
				</div>
			)
		}

		return (
			<div className='link-wrap'>
				<a href={href} className='link'>
					{label}
				</a>
			</div>
		)
	}
}