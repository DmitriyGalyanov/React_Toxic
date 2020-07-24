import React, {Component} from 'react';

import {Link} from 'Components/Link/Link.jsx'

import './LinksList.scss';

export class LinksList extends Component {
	// getLinksList = () => {
	// 	let key = 0;
	// 	return (this.props.links.map((link) => {
	// 		return (<li key={++key}><Link label={link[0]} href={link[1]}/></li>)
	// 	}));
	// };

	render() {
		const {header} = this.props;
		let key = 0;
		return (
		<div className='link-list'>
			<h3 className='link-list__header'>{header}</h3>
			<ul className='link-list__links'>
				{/* {this.getLinksList()} */}
				{this.props.links.map((link) => {
					return (<li key={++key}><Link label={link[0]} href={link[1]}/></li>)
				})}
			</ul>
		</div>
		)
	}
}