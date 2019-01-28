import React, { Component } from 'react'
import Prism from 'prismjs'
import PrismPython from 'prismjs/components/prism-python'
import styled from 'styled-components'

//from Prism css
const CodeStyles = styled.div`
  width: 90%;
  border: 0.3em solid whitesmoke;
  box-shadow: 0 0 0 0.15em ${props => props.theme.darkerPurple};
  margin-top: 1em;
  code[class*="language-"],
  pre[class*="language-"] {
    font-family: ${props => props.theme.mono};
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: .4em .8em;
    margin: 0;
    overflow: auto;
    background: ${props => props.theme.darkerPurple};
    background-size: 1em 1em;
  }

  code[class*="language-"] {
    background:${props => props.theme.darkerPurple};
    color: white;
    box-shadow: -.3em 0 0 .3em ${props => props.theme.darkerPurple};, .3em 0 0 .3em ${props => props.theme.darkerPurple};
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .2em;
    border-radius: .3em;
    box-shadow: none;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #aaa;
  }

  .token.punctuation {
    color: #999;
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol {
    color: #0cf;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin {
    color: yellow;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .toke.variable,
  .token.inserted {
    color: yellowgreen;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: deeppink;
  }

  .token.regex,
  .token.important {
    color: orange;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.deleted {
    color: red;
  }

`

export default class Code extends Component{

  componentDidMount() {
    Prism.highlightAll();
  }
  
  render(){
    return <CodeStyles>
      <pre>
        <code className="language-python">
          {this.props.children}
        </code>
      </pre>
    </CodeStyles>
  }
}