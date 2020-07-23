import styled from 'styled-components';


export const StyledButton = styled.a`
	display: inline-block; position: relative;
	min-width: 100px;
	text-transform: uppercase;
	padding: 10px 20px;
	text-align: center;
	border-radius: 22px; box-sizing: border-box;
	font-weight: bold; font-size: 12px;
	color: #fff; text-decoration: none;
	&:hover {
		cursor: pointer;
		&:after {
			position: absolute; content: '';
			color: inherit;
			top: 0; right: 0; bottom: 0; left: 0;
			z-index: 1; border-radius: inherit;
			margin: -1px;
			background: #fff; opacity: 0.5;
		}
	}

	${(props) => {
		let addStyling = ``;
		if (props.insideForm) {
			addStyling += `padding-top: 15px; padding-bottom: 15px;`
		}
		if (props.filled) {
			addStyling += `
			background: linear-gradient(180deg, ${props.theme.colors.main} 0%, ${props.theme.colors.gradient} 100%);
			`
		}
		if (props.hollow) {
			addStyling += `
				background-color: #fff;
				color: ${props.theme.colors.main};
				&:before {
					position: absolute; content: '';
					top: 0; right: 0; bottom: 0; left: 0;
					z-index: -1;
					margin: -1px;
					border-radius: inherit;
					background: linear-gradient(180deg, ${props.theme.colors.main} 0%, ${props.theme.colors.gradient} 100%);
				}
			`
		}
		if (props.payment) {
			addStyling += `
				max-width: 320px;
				span {
					position: absolute; top: calc(50% - 1px); right: 14px;
					width: 14px; height: 2px; background-color: #fff;
					&::after {
						content: ''; background-color: inherit;
						display: block; position: absolute;
						width: 10px; height: 2px;
						top: 3px; right: -2px;
						transform: rotate(-45deg);
					}
					&::before {
						content: ''; background-color: inherit;
						display: block; position: absolute;
						width: 10px; height: 2px;
						bottom: 3px; right: -2px;
						transform: rotate(45deg);
					}
				}
			`
		}
		return addStyling;
	}}
`