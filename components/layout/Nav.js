import styled from 'styled-components'
import Link from 'next/link'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
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
  .nav-links{
    display: flex;
    align-items: center;
  }
  .left-links{
    margin-left: 4em;
  }
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
  @media screen and (max-width: 680px){
    justify-content: center;
  }
`

export default () => <StyledNav>
  <div className="nav-links left-links">
    <Link prefetch href="/docs">
      <a>Documentation</a>
    </Link>
    <Link prefetch href="/versions">
      <a>Versions</a>
    </Link>
  </div>
  <div className="nav-links right-links">
    <a target="_blank" href="https://github.com/ScottMorse/PyMusician">
      GitHub
    </a>
    <Link prefetch href="/about">
      <a>About</a>
    </Link>
  </div>
</StyledNav>