import React from 'react'
import styled from 'styled-components'
import { RiSearchLine, RiCloseCircleFill } from 'react-icons/ri'
import { IconContext } from 'react-icons'

export default function Input({ inputValue, updateInput }) {
  function handleOnChange(event) {
    updateInput(event.target.value)
  }

  function resetInputValue() {
    updateInput('')
  }

  return (
    <InputWrapper>
      <StyledInput
        placeholder="Station suchen"
        value={inputValue}
        onChange={handleOnChange}
      />
      <IconContext.Provider
        value={{ size: '2.5em', color: 'grey', width: '100%' }}
      >
        {inputValue === '' ? (
          <RiSearchLine />
        ) : (
          <Button onClick={resetInputValue}>
            <RiCloseCircleFill />
          </Button>
        )}
      </IconContext.Provider>
    </InputWrapper>
  )
}

const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 10px 30px 10px;
  border-radius: 15px;
  border: none;
  background-color: #f5f5f5;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`

const StyledInput = styled.input`
  all: unset;
  font-size: 1.3em;
  outline: none;
  padding-right: 30px;
  width: 100%;
`
