import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return <HeaderWrapper>Meine Stadtrad Stationen</HeaderWrapper>
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`
