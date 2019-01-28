import Header from './Header'
import Meta from './Meta'
import Footer from './Footer'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  purple: "#8500e7",
  darkPurple: "#3c0068",
  darkerPurple: "#22003b",
  pink: "#ed008e",
  display: "Squada One, sans-serif",
  sans: "Asap, sans-serif",
  serif: "Yrsa, Asap, sans-serif",
  mono: "Roboto Mono,monospace"
}

const GlobalStyle = createGlobalStyle`

  @import url('/static/fonts/Asap');
  @import url('/static/fonts/Yrsa');
  @import url('/static/fonts/Roboto_Mono');
  @import url('/static/fonts/Squada_One');

  html {
    line-height: 1;
    font-size: 10px;
    font-family: ${props => props.theme.sans};
    background-color: ${props => props.theme.purple};
  }
  body{
    margin: 0;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a{
    all: unset;
    color: white;
    transition: all 0.4s ease;
  }
  a:hover{
    cursor: pointer;
  }
  .page-transition-enter {
    transform: translateX(-100vw);
  }
  .page-transition-enter-active {
    transform: translateX(0vw);
    transition: transform 300ms;
  }
  .page-transition-exit {
    transform: translateX(0vw);
  }
  .page-transition-exit-active {
    transform: translateX(100vw);
    transition: transform 300ms;
  }

  #page-wrap{
    background-color: ${props => props.theme.purple};
    min-height: 100vh;
  }

  main {
    padding-bottom: 4em;
  }

  @media screen and (min-width: 400px){
    html {
        font-size: 12px;  
    }
  }

  @media screen and (min-width: 480px){
    html {
        font-size: 14px;  
    }
  }

  @media screen and (min-width: 768px){
    html {
        font-size: 14px;  
    }
  }

  @media screen and (min-width: 1080px){
    html {
        font-size: 16px;  
    }
  }

  @media screen and (min-width: 1240px){
    html {
        font-size: 18px;  
    }
  }

  @media screen and (min-width: 1400px){
    html {
        font-size: 20px;  
    }
  }
`

export default (props) => <ThemeProvider theme={theme}>
  <span><div id="page-wrap">
    <GlobalStyle/>
    <Meta {...props}/>

      <Header/>
      <main>
        {props.children}
      </main>
  </div>
  <Footer/></span>
</ThemeProvider>