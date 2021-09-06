import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <Switch>
      <Route exact path="/">
        <HeaderWrapper>Meine Favoriten</HeaderWrapper>
      </Route>
      <Route path="/search">
        <HeaderWrapper>Stationssuche</HeaderWrapper>
      </Route>
      <Route path="/thing">
        <HeaderWrapper>Mein Favorit</HeaderWrapper>
      </Route>
    </Switch>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2em;
  background-color: #003063;
`
