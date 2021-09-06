import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { IconContext } from 'react-icons'

export default function FooterNavBar() {
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
                  Meine Favoriten
                </ContentWrapper>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                activeStyle={{
                  color: 'red',
                }}
              >
                <ContentWrapper>
                  <FiSearch />
                  Stationssuche
                </ContentWrapper>
              </NavLink>
            </li>
          </NavList>
        </Navigation>
      </IconContext.Provider>
    </Footer>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const Footer = styled.footer`
  position: fixed;
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
