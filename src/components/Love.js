import React from 'react'
import styled from 'styled-components'
import { RiHeart3Fill } from 'react-icons/ri'

export default function Love() {
  return (
    <LoveWrapper>
      Coded with <RiHeart3Fill size="2em" /> for Hamburg
    </LoveWrapper>
  )
}

const LoveWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  & svg {
    margin: 0 0.4em;
  }
`
