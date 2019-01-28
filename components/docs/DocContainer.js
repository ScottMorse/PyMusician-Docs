import React, { Component } from 'react'
import styled from "styled-components"
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import Link from 'next/link'

const StyledDocPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .top{
    display: flex;
    align-items: center;
    margin-top: 2em;
    margin-bottom: 2em;
  }
  .back-button{
    color: white;
    position: absolute;
    left: 0;
    background-color: ${props => props.theme.pink};
    padding: 0.5em;
    font-size: 1.5em;
    border-radius: 5%/15%;
    margin-left: 1em;
    box-shadow:  0.1em 0.1em 0.1em ${props => props.theme.darkPurple}a0;
  }
  .title{
    font-family: ${props => props.theme.display};
    color: white;
    text-shadow: 0.04em 0.04em ${props => props.theme.darkPurple};
    font-size: 3em;
    margin: 0 auto 0 auto;
  }
  .doc-main{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section {
    margin-bottom: 1em;
    width: calc(900px - 4em);
    @media screen and (max-width: 900px){
      width: calc(90vw - 4em); 
    }
    a {
      color: blue;
    }
    background: white;
    color: #202020;
    padding: 2em;
    box-shadow:  0.1em 0.1em 0.1em ${props => props.theme.darkPurple}a0;
    h2 {
      font-family: ${props => props.theme.display};
      text-align: center;
      font-size: 2em;
      margin: 1em 0 0.5em 0;
    }
    h2:first-child{
      margin-top: 0;
    }
    h3{
      font-family: ${props => props.theme.mono};
      font-weight: bold;
      height: 1.5em;
      overflow-x: scroll;
    }
    p {
      text-indent: 3em;
      line-height: 1.2;
      font-size: 1.2em;
      font-family: ${props => props.theme.serif};
      margin: 0.5em 0 0.5em 0;
    }
    table, th {
      border: 1px solid black;
    }
    table{
      margin: 0 auto 0 auto;
    }
    .center{
      width: 100%;
      text-align: center;
    }
    .ref-links{
      display: flex;
      flex-direction: column;
      max-height: 10em;
      margin: 1em;
      flex-wrap: wrap;
      li {
        padding-right: 3em;
        margin: 0.2em;
        a {
          color: blue;
        }
      }
    }
    .top-link{
      position: absolute;
      background: ${props => props.theme.pink};
      padding: 0.4em;
      margin: -1em 0 0 -1em;
      color: white;
    }
    .center-list{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      
    }
  }
`


export default class DocContainer extends Component {

  componentDidMount(){
    document.querySelectorAll('section').forEach((section,i) => {
      if(i==0) return
      const topButton = document.createElement('a')
      topButton.href="#top"
      topButton.className = "top-link"
      topButton.innerHTML = "↑ To Top"
      section.insertBefore(topButton,section.firstElementChild)
    })
    Prism.highlightAll();
  }

  render(){
    return <StyledDocPage>
      <div className="top">
        <Link prefetch href="/docs">
          <a className="back-button">← Back</a>
        </Link>
        <h1 id="top" className="title">{this.props.title}</h1>
      </div>
      <div className="doc-main">
        {this.props.children}
      </div>
    </StyledDocPage>
  }

}