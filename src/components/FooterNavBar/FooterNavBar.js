import { NavLink, Switch, Route, Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineRefresh, HiOutlineHome } from 'react-icons/hi'
import { VscLoading } from 'react-icons/vsc'
import { IconContext } from 'react-icons'
import { useQueryClient } from 'react-query'
import { useIsFetching } from 'react-query'
import { Trans } from '@lingui/macro'

export default function FooterNavBar() {
  const queryClient = useQueryClient()
  const isFetching = useIsFetching()
  async function refetchAll() {
    await queryClient.refetchQueries()
  }

  return (
    <Footer>
      <IconContext.Provider value={{ size: '2em', width: '100%' }}>
        <Navigation>
          <NavList>
            <li>
              <NavLink
                to="/"
                exact
                activeStyle={{
                  color: 'red',
                }}
              >
                <ContentWrapper>
                  <AiOutlineHeart />
                  <Trans>Meine Favoriten</Trans>
                </ContentWrapper>
              </NavLink>
            </li>
            <ListItem>
              <Switch>
                <Route path="/settings">
                  <Circle to="/">
                    <HiOutlineHome size={'3em'} color={'#003063'} />
                  </Circle>
                </Route>
                <Route path="/">
                  <RefreshButton onClick={refetchAll}>
                    {isFetching ? (
                      <RotateLoadingSymbol size={'3em'} color={'#003063'} />
                    ) : (
                      <HiOutlineRefresh size={'3em'} color={'#003063'} />
                    )}
                  </RefreshButton>
                </Route>
              </Switch>
            </ListItem>
            <li>
              <NavLink
                to="/search"
                activeStyle={{
                  color: 'red',
                }}
              >
                <ContentWrapper>
                  <FiSearch />
                  <Trans>Stationssuche</Trans>
                </ContentWrapper>
              </NavLink>
            </li>
          </NavList>
        </Navigation>
      </IconContext.Provider>
    </Footer>
  )
}

const Circle = styled(Link)`
  all: unset;
  cursor: pointer;
  border-radius: 50%;
  border: 7px solid #003063;
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: white;
  box-shadow: 0 0px 2.2px -20px rgba(0, 0, 0, 0.121),
    0 0px 5.3px -20px rgba(0, 0, 0, 0.174),
    0 0px 10px -20px rgba(0, 0, 0, 0.215),
    0 0px 17.9px -20px rgba(0, 0, 0, 0.256),
    0 0px 33.4px -20px rgba(0, 0, 0, 0.309),
    0 0px 80px -20px rgba(0, 0, 0, 0.43);
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const Footer = styled.footer`
  position: fixed;
  z-index: 20;
  bottom: 0px;
  right: 0px;
  left: 0px;
  height: 90px;
  width: 100vw;
  background-color: white;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0px 2.2px -20px rgba(0, 0, 0, 0.121),
    0 0px 5.3px -20px rgba(0, 0, 0, 0.174),
    0 0px 10px -20px rgba(0, 0, 0, 0.215),
    0 0px 17.9px -20px rgba(0, 0, 0, 0.256),
    0 0px 33.4px -20px rgba(0, 0, 0, 0.309),
    0 0px 80px -20px rgba(0, 0, 0, 0.43);
`

const ListItem = styled.li`
  position: absolute;
  top: -45px;
`
const Navigation = styled.nav`
  width: 100%;
  height: 100%;
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
`

const RefreshButton = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 50%;
  border: 7px solid #003063;
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: white;
  box-shadow: 0 0px 2.2px -20px rgba(0, 0, 0, 0.121),
    0 0px 5.3px -20px rgba(0, 0, 0, 0.174),
    0 0px 10px -20px rgba(0, 0, 0, 0.215),
    0 0px 17.9px -20px rgba(0, 0, 0, 0.256),
    0 0px 33.4px -20px rgba(0, 0, 0, 0.309),
    0 0px 80px -20px rgba(0, 0, 0, 0.43);
`

const rotation = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const RotateLoadingSymbol = styled(VscLoading)`
  animation-name: ${rotation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`
