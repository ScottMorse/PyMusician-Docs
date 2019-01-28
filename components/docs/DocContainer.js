import React, { Component } from 'react'
import styled from "styled-components"
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
    transform: translateX(-28vw);
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
      width: calc(100vw - 4em); 
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    color: #202020;
    padding: 2em;
    box-shadow:  0.1em 0.1em 0.1em ${props => props.theme.darkPurple}a0;
    h2 {
      font-family: ${props => props.theme.display};
      text-align: center;
      font-size: 2em;
      margin: 0 0 0.5em 0;
    }
    p {
      text-indent: 3em;
      line-height: 1.2;
      font-size: 1.2em;
      font-family: ${props => props.theme.serif};
      margin: 0.5em 0 0.5em 0;
    }
  }
`


export default class DocContainer extends Component {

  render(){
    return <StyledDocPage>
      <div className="top">
        <Link href="/docs">
          <a className="back-button">← Back</a>
        </Link>
        <h1 className="title">{this.props.title}</h1>
      </div>
      <div className="doc-main">
        {this.props.children}
      </div>
    </StyledDocPage>
  }

}