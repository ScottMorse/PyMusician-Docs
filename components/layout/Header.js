import styled from 'styled-components'
import Nav from './Nav'
import NProgress from "next-nprogress/component"

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  color: white;
  text-shadow: 0.08em 0.08em ${props => props.theme.darkPurple};
  margin-top: 2em;
  .title {
    display: flex;
    align-items: center;
    img {
      width: 5em;
      margin-left: -5em;
      border-radius: 50%;
      padding: 0.3em;
      margin: -1em 1em -1em 2em;
      background-color: ${props => props.theme.darkPurple};
      border: 0.09em solid rgb(190,190,190);
      box-shadow: 0 0 0 0.1em ${props => props.theme.darkPurple};
    }
    h1 {
      font-family: ${props => props.theme.display};
      font-size: 4em;
      margin: 0;
      letter-spacing: -0.02em;
      text-shadow: 0.05em 0.04em ${props => props.theme.darkPurple};
    }
  }
`

export default () => <StyledHeader>
  <div className="title">
    <img src="/static/imgs/pymusician.png"/>
    <h1>PyMusician</h1>
  </div>
  <Nav/>
  <NProgress/>
</StyledHeader>