import styled from 'styled-components'

export default function FooterNavBar() {
  return (
    <Footer>
      <nav>
        <ul>
          <li>Meine Stationen</li>
          <li>Stationssuche</li>
        </ul>
      </nav>
    </Footer>
  )
}

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
