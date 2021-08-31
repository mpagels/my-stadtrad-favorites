import React from 'react'
import styled from 'styled-components'

export default function Input({ value, handleOnChange }) {
  return (
    <StyledInput
      placeholder="Station suchen"
      value={value}
      onChange={handleOnChange}
    />
  )
}

const StyledInput = styled.input`
  padding: 10px;
  width: 95%;
  text-align: center;
  font-size: 1.3em;

  border-radius: 15px;
  border: solid 1px #d6d6d6;
  background-color: #f5f5f5;
`
