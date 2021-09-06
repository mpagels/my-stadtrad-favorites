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
  height: 75px;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
