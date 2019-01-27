import styled from 'styled-components'
import Link from 'next/link'

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5em;
  margin-top: 2.25em;
  margin-bottom: 0.2em;
  width: 100vw;
  color: white;
  background-color: ${props => props.theme.darkPurple};
  border-top: 0.05em solid ${props => props.theme.purple};
  border-bottom: 0.05em solid ${props => props.theme.purple};
  box-shadow: 0 0 0 0.15em ${props => props.theme.darkPurple};
  padding-top: 0.2em;
  a:hover{
    color: ${props => props.theme.pink};
    animation: linkHover 0.4s linear;
  }
  @keyframes linkHover{
    0%{transform: rotate(-1deg)}
    33%{transform: rotate(0deg)}
    66%{transform: rotate(1deg)}
    100%{transform: rotate(0deg)}
  }
  a {
    margin-right: 5vw;
    font-size: 1.25em;
  }
`

export default () => <StyledNav>
  <Link prefetch href="/docs">
    <a>Documentation</a>
  </Link>
  <a target="_blank" href="https://github.com/ScottMorse/PyMusician">
    On GitHub
  </a>
  <Link prefetch href="/about">
    <a>About</a>
  </Link>
</StyledNav>