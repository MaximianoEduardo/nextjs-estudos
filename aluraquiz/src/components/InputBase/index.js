import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'

const InputBase = styled.input`
width: 100%;
			height: 36px;
			padding: 15px;
			border: 1px solid ${({ theme }) => theme.colors.primary};
			border-radius: ${({ theme }) => theme.borderRadius};
			background: ${({ theme }) => theme.colors.mainBg};
			color: ${({ theme }) => theme.colors.contrastText};
			font-weight: 400;
			font-size: 14px;
			letter-spacing: 0.15px;
			outline: 0;

`


function Input({ onChange, placeholder, ...props }) {
	return (
		<InputBase placeholder={placeholder} onChange={onChange} {...props} />
	)
}

Input.propTypes = {


	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired


}


export default Input
