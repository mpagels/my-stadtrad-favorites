import React from 'react'
import { IconContext } from 'react-icons'
import { IoArrowBackSharp } from 'react-icons/io5'
import { Route, Switch, useHistory } from 'react-router'
import styled from 'styled-components'

export default function Header() {
  const history = useHistory()

  return (
    <Switch>
      <Route exact path="/">
        <HeaderWrapper>Meine Favoriten</HeaderWrapper>
      </Route>
      <Route path="/search">
        <HeaderWrapper>Stationssuche</HeaderWrapper>
      </Route>
      <Route path="/thing">
        <IconContext.Provider value={{ size: '2em', color: 'white' }}>
          <BackButton onClick={() => history.goBack()}>
            <IoArrowBackSharp />
          </BackButton>
        </IconContext.Provider>
        <HeaderWrapper>Mein Favorit</HeaderWrapper>
      </Route>
    </Switch>
  )
}

const BackButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  left: 5%;
  top: 20px;
`

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2em;
  background-color: #003063;
`
