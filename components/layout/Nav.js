import styled from 'styled-components'
import Link from 'next/link'

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5em;
  margin-top: 2.25em;
  width: 100vw;
  color: white;
  background-color: ${props => props.theme.darkPurple};
  border-top: 0.05em solid ${props => props.theme.purple};
  border-bottom: 0.05em solid ${props => props.theme.purple};
  box-shadow: 0 0 0 0.15em ${props => props.theme.darkPurple};
  padding-top: 0.2em;
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
  <a target="_blank" href="https://github.com/ScottMorse/PyMusician">
    On GitHub
  </a>
  <Link href="/docs">
    <a>About</a>
  </Link>
</StyledNav>