import React, { Component } from 'react'
import Header from './Header'
import Meta from './Meta'
import Footer from './Footer'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  attribute: "value"
}

const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1;
  }
  body{
    margin: 0;
  }
  .page-transition-enter {
    opacity: 0;
  }
  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 300ms;
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