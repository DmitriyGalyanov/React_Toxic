import React from 'react';

import './BulletList.scss';


export function BulletList(props) {
	const {header, items} = props;
	console.log(header, items)
	return (
		<div className='bullet-list-wrap'>
			<h4 className='bullet-list__header'>{header}</h4>
			<ul className='bullet-list__list'>
				{items.map((item, index) => {
					return (
						<li key={index} className='bullet-list__item'>{item}</li>
					)
				})}
			</ul>
		</div>
	)
}