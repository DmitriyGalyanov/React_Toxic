import React from 'react';

import './IconsTextList.scss';


export function IconsTextList(props) {
	const imgsFormat = 'svg';
	return (
		<div className='icons-text-list-wrap'>
			<h2 className='icons-text-list__header'>{props.header}</h2>
			<ul className='icons-text-list__list'>
				{props.attributes.map((attribute, index) => {
					return (
						<li key={index} className='icons-text-list__item'>
							<img src={require(`./${attribute.name}.${imgsFormat}`)} alt={`${attribute.name} pic`}/>
							<div className='icons-text-list__text-wrap'>
								<h3 className='icons-text-list__item-header'>{attribute.ruName}</h3>
								<p className='icons-text-list__item-description'>{attribute.desc}</p>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
		
		
	)
}