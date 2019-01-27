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
    position: fixed;
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