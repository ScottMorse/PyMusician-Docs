import React, { Component } from 'react'
import Header from './Header'
import Meta from './Meta'
import Footer from './Footer'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  purple: "#8500e7",
  darkPurple: "#3c0068",
  pink: "#ed008e",
  display: "Squada One, sans-serif",
  sans: "Hind, sans-serif"
}

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Squada One');
  @import url('https://fonts.googleapis.com/css?family=Hind');

  html {
    line-height: 1;
    font-family: ${props => props.theme.sans};
  }
  body{
    margin: 0;
  }
  a{
    all: unset;
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

  @media screen and (min-width: 320px){
    html {
        font-size: 10px;  
    }
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

export default class Page extends Component {
  render(){
    return <ThemeProvider theme={theme}>
        <div id="page-wrap">
          <GlobalStyle/>
          <Meta/>

            <Header/>
            <main>
              {this.props.children}
            </main>
            <Footer/>

        </div>
      </ThemeProvider>
  }
}