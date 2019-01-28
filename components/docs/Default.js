import styled from 'styled-components'
import Link from 'next/link'

const DocsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h1{
    font-family: ${props => props.theme.display};
    font-size: 3em;
    color: white;
    text-shadow: 0.04em 0.04em ${props => props.theme.darkPurple};
  }
  .links {
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  a{
    font-family: ${props => props.theme.display};
    color: white !important;
    font-size: 2.5em;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10%;
    margin: 0.5em;
    width: 200px;
    height: 200px;
    background-color: ${props => props.theme.darkPurple};
    transition: transform 0.5s ease, box-shadow 0.5s ease, background-color 0.5s ease;
    background-image: linear-gradient(125deg,rgba(0,0,0,0),48%,rgba(255,255,255,0.25) 50%,rgba(0,0,0,0) 52%);
    background-position-x: -300px;
    background-repeat: no-repeat;
    box-shadow:  0.1em 0.1em 0.1em ${props => props.theme.darkPurple}a0;
    @media screen and (max-width: 768px){
      width: 4em;
      height: 4em;
      color: white;
    }
  }
  a:hover{
    transform: scale(1.1);
    background-color: ${props => props.theme.pink};
    box-shadow:  0.05em 0.15em 0.1em ${props => props.theme.darkPurple}a0;
  }
  .getting{
    background-color: ${props => props.theme.pink};
  }
`

export default () => <DocsPage>
  <h1>Documentation</h1>
  <div class="links">
    <Link href="/docs?page=getting-started">
      <a className="getting">Getting Started</a>
    </Link>
    <Link href="/docs?page=notes">
      <a>Notes</a>
    </Link>
    <Link href="/docs?page=intervals">
      <a>Intervals</a>
    </Link>
    <Link href="/docs?page=modes">
      <a>Modes</a>
    </Link>
    <Link href="/docs?page=chords">
      <a>Chords</a>
    </Link>
    <Link href="/docs?page=timesignatures">
      <a>Time Signatures</a>
    </Link>
  </div>
</DocsPage>