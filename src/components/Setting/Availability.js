import { useState } from 'react'
import styled from 'styled-components'

export default function Availability() {
  const [activeButton, setActiveButton] = useState('X')

  function handleOnClick(button) {
    setActiveButton(button)
  }

  const buttons = ['X', '1', '2', '3', '4', '5']
  return (
    <Wrapper>
      {buttons.map((button) => (
        <Button
          key={button}
          onClick={() => handleOnClick(button)}
          isActive={button === activeButton}
        >
          {button}
        </Button>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  margin: 20px 0 10px 0;
`

const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  font-weight: 700;
  padding: 7px;
  border-radius: 10px;
  border: 3px solid #003063;
  width: 20px;
  height: 20px;

  ${({ isActive }) =>
    !isActive &&
    `&:hover {
    background-color: rgba(0, 0, 255, 0.034);
  }`}

  ${({ isActive }) =>
    isActive &&
    `color: white;
  background-color: #003063;`}
`
