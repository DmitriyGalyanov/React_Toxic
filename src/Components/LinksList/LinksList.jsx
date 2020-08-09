import React from 'react';

import {CustomLink} from 'Components/CustomLink/CustomLink.jsx'

import './LinksList.scss';

export function LinksList(props) {
	const {header, links} = props;
	return (
	<div className='link-list'>
		<h3 className='link-list__header'>{header}</h3>
		<ul className='link-list__links'>
			{links.map((link, index) => {
				return (<li key={index}><CustomLink label={link[0]} href={link[1]}/></li>)
			})}
		</ul>
	</div>
	)
}