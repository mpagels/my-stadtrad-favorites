import { FaGithub, FaLinkedin, FaXingSquare, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

export default function ContactIcons() {
  return (
    <IconList>
      <li>
        <Link href="https://github.com/mpagels">
          <FaGithub size="1.9em" />
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/martin-pagels-658169203/">
          <FaLinkedin size="1.9em" />
        </Link>
      </li>
      <li>
        <Link href="https://www.xing.com/profile/Martin_Pagels/cv">
          <FaXingSquare size="1.9em" />
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/MPagels">
          <FaTwitter size="1.9em" />
        </Link>
      </li>
    </IconList>
  )
}

function Link({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

const IconList = styled.ul`
  margin: 10px 0;
  list-style: none;
  padding: 0;
  display: flex;
  gap: 7px;
`
