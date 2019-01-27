import styled from 'styled-components'
import Link from 'next/link'

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5em;
  margin-top: 2em;
  width: 100vw;
  color: white;
  background-color: ${props => props.theme.darkPurple};
  a:hover{
    color: ${props => props.theme.pink};
  }
  a {
    margin-right: 5vw;
    font-size: 1.25em;
  }
`

export default () => <StyledNav>
  <Link href="/docs">
    <a>Documentation</a>
  </Link>
  <Link href="/docs">
    <a>The Goals</a>
  </Link>
  <Link href="/docs">
    <a>On GitHub</a>
  </Link>
  <Link href="/docs">
    <a>About</a>
  </Link>
</StyledNav>