import styled from 'styled-components'
import { useLingui } from '@lingui/react'

export default function Language() {
  const { i18n } = useLingui()
  const buttons = [
    { display: i18n._('Deutsch'), locale: 'de' },
    { display: i18n._('Englisch'), locale: 'en' },
  ]

  const locale = i18n.locale

  function handleClick(language) {
    i18n.activate(language)
  }
  return (
    <Wrapper>
      {buttons.map((button) => (
        <Button
          key={button}
          onClick={() => handleClick(button.locale)}
          isActive={button.locale === locale}
        >
          {button.display}
        </Button>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  margin: 0 0 10px 0;
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
  width: 100px;
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
