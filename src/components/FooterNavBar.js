import styled from 'styled-components'

export default function FooterNavBar() {
  return (
    <Footer>
      <Navigation>
        <NavList>
          <li>Meine Stationen</li>
          <li>Stationssuche</li>
        </NavList>
      </Navigation>
    </Footer>
  )
}

const Footer = styled.footer`
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
