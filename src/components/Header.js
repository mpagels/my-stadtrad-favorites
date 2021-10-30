import React from 'react'
import { IconContext } from 'react-icons'
import { IoArrowBackSharp, IoSettingsOutline } from 'react-icons/io5'
import { Route, Switch, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Trans } from '@lingui/macro'

export default function Header() {
  const history = useHistory()

  return (
    <Switch>
      <Route exact path="/">
        <IconContext.Provider value={{ size: '2em', color: 'white' }}>
          <SettingButton to="/settings">
            <IoSettingsOutline />
          </SettingButton>
        </IconContext.Provider>
        <HeaderWrapper>
          <Trans>Meine Favoriten</Trans>
        </HeaderWrapper>
      </Route>
      <Route path="/search">
        <IconContext.Provider value={{ size: '2em', color: 'white' }}>
          <SettingButton to="/settings">
            <IoSettingsOutline />
          </SettingButton>
        </IconContext.Provider>
        <HeaderWrapper>
          <Trans>Stationssuche</Trans>
        </HeaderWrapper>
      </Route>
      <Route path="/settings">
        <IconContext.Provider value={{ size: '2em', color: 'white' }}>
          <BackButton onClick={() => history.goBack()}>
            <IoArrowBackSharp />
          </BackButton>
        </IconContext.Provider>
        <HeaderWrapper>
          <Trans>Einstellungen</Trans>
        </HeaderWrapper>
      </Route>
      <Route path="/thing">
        <IconContext.Provider value={{ size: '2em', color: 'white' }}>
          <BackButton onClick={() => history.goBack()}>
            <IoArrowBackSharp />
          </BackButton>
          <SettingButton to="/settings">
            <IoSettingsOutline />
          </SettingButton>
        </IconContext.Provider>
        <HeaderWrapper>
          <Trans>Mein Favorit</Trans>
        </HeaderWrapper>
      </Route>
    </Switch>
  )
}

const BackButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  left: 5%;
  top: 22px;
`

const SettingButton = styled(Link)`
  all: unset;
  cursor: pointer;
  position: absolute;
  right: 5%;
  top: 22px;
`

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2em;
  background-color: #003063;
`
