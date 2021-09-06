import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function FooterNavBar() {
  return (
    <Footer>
      <Navigation>
        <NavList>
          <li>
            <NavLink to="/">Meine Favoriten</NavLink>
          </li>
          <li>
            <NavLink to="/search">Stationssuche</NavLink>
          </li>
        </NavList>
      </Navigation>
    </Footer>
  )
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0px;
  right: 0px;
  height: 75px;
  width: 100vw;
  background-color: white;
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
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
`
