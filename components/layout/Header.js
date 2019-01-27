import styled from 'styled-components'
import Nav from './Nav'
import NProgress from "next-nprogress/component"
import Link from 'next/link'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  color: white;
  text-shadow: 0.08em 0.08em ${props => props.theme.darkPurple};
  background-color: ${props => props.theme.purple};
  padding-top: 2em;
  .header-main{
    display: flex;
    align-items: center;
  }
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
      background-image: linear-gradient(125deg,${props => props.theme.darkPurple},48%,rgba(255,255,255,0.5) 50%,${props => props.theme.darkPurple} 52%);
      background-position-x: -300px;
      background-repeat: no-repeat;
    }
    @keyframes logoShine{
      from{background-position-x: -150px}
      to{background-position-x: 150px}
    }
    h1 {
      font-family: ${props => props.theme.display};
      font-size: 4em;
      margin: 0;
      letter-spacing: -0.02em;
      text-shadow: 0.05em 0.04em ${props => props.theme.darkPurple};
    }
  }
  .title:hover{
    img{
      animation: logoShine 0.45s linear forwards;
    }
  }
  .teaser {
    position: relative;
    z-index: 1;
    font-size: 1.2em;
    padding-left: 1em;
    margin-left: 4em;
    border-left: 5px solid ${props => props.theme.darkPurple};
    user-select: none;
    @media screen and (max-width: 720px){
      display: none;
    }
  }
  .piano-keys{
    display: none;
    @media screen and (min-width: 940px){
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      height: 7em;
      width: 17em;
      .key.white{
        height: 20%;
        width: 100%;
        border-bottom: 0.2em solid ${props => props.theme.darkPurple};
      }
      .key.black{
        /* position: absolute;s */
        right: 0;
        height: 20%;
        width: 50%;
        transform: translateY(-50%);
        background-color: ${props => props.theme.darkPurple};
      }
    }
  }
`

export default () => <StyledHeader>
  <div className="header-main">
    <Link href="/">
      <a className="title">
        <img src="/static/imgs/pymusician.png"/>
        <h1>PyMusician</h1>
      </a>
    </Link>
    <div className="teaser">
      Python for music theorists,<br/>by music theorists
    </div>
    <div className="piano-keys">
      <div className="key white"/>
      <div className="key black"/>
      <div className="key white"/>
      <div className="key black"/>
      <div className="key white"/>
      <div className="key black"/>
    </div>
  </div>
  <Nav/>
  <NProgress
    color="white"
    options={{ trickleSpeed: 50 }}
    showAfterMs={0}
    spinner
  />
</StyledHeader>