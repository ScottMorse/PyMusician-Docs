import styled from 'styled-components'
import Link from 'next/link'

const StyledHome = styled.div`
  padding-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  .pip{
    display: flex;
    background-color: ${props => props.theme.pink};
    padding: 1em;
    color: white;
    margin-top: -1em;
    font-family: ${props => props.theme.mono};
    box-shadow:  0.2em 0.2em 0.1em ${props => props.theme.darkPurple}a0;
    span{
      user-select: none;
      margin-right: 0.5em;
    }
  }
  .input{
    color: white;
    font-size: 1.1em;
    height: 0.9em;
    width: 0.5em;
    background: white;
    margin: -0.059em 0 0 0.045em;
    visibility: hidden;
    animation: blinkBlock 0.5s infinite alternate;
  }
  @keyframes blinkBlock{
    0%{visibility: hidden}
    49%{visibility: visible}
    50%{visibility: hidden}
  }
  .module-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .main-module{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-family: ${props => props.theme.display};
    font-size: 2em;
    text-shadow: 0.08em 0.08em ${props => props.theme.darkPurple};
    text-align: center;
    width: 300px;
    height: 348px;
    border-radius: 5%;
    margin: 1em;
    background-color: ${props => props.theme.darkPurple};
    border: 0.1em solid ${props => props.theme.darkPurple};
    box-shadow:  0.1em 0.1em 0.1em ${props => props.theme.darkPurple}a0;
    img {
      margin: auto 0 auto 0;
      width: 150px;
    }
    .logo{
      width: 200px;
    }
    .module-title{
      display: flex;
      color: white;
      justify-content: center;
      align-items: center;
      height: 75px;
      width: 250px;
      width: 100%;
      border: 0.1em solid ${props => props.theme.darkPurple};
      border-top: none;
      background: ${props => props.theme.pink};
      border-radius: 0% 0% 4% 4% / 0% 0% 16% 16%;
    }
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    background-image: linear-gradient(125deg,${props => props.theme.darkPurple},48%,rgba(255,255,255,0.25) 50%,${props => props.theme.darkPurple} 52%);
    background-position-x: -300px;
    background-repeat: no-repeat;
    @media screen and (max-width: 768px){
      width: 6em;
      height: 8em;
      img {
        width: 3em;
      }
      .logo{
        width: 4em;
      }
      .module-title{
        height: 2em;
      }
    }
  }
  .main-module:hover{
    transform: scale(1.1);
    box-shadow:  0.05em 0.05em 0.1em ${props => props.theme.darkPurple}a0;
    animation: moduleShine 0.45s linear forwards;
  }
  @keyframes moduleShine{
    from{background-position-x: -300px}
    to{background-position-x: 300px}
  }
`

export default () => <StyledHome suppressClassNameWarning>
  <div className="pip"><span>$ </span> pip install pymusician<div className="input"></div></div>
  <div className="module-container">
    <Link href="/docs">
      <a className="main-module">
        <img src="/static/imgs/docs.png"/>
        <div className="module-title">Read The Docs</div>
      </a>
    </Link>
    <a target="_blank" href="https://github.com/ScottMorse/PyMusician" className="main-module">
      <img src="/static/imgs/python.png"/>
      <div className="module-title">Source Code</div>
    </a>
    <Link href="/about">
      <a className="main-module">
        <img className="logo" src="/static/imgs/pymusician.png"/>
        <div className="module-title">About the Project</div>
      </a>
    </Link>
  </div>
</StyledHome>