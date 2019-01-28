import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  .section {
    max-width: 800px;
    /* font-weight: bold; */
    padding: 1em;
    color: #202020;
    background: white;
    box-shadow:  0.2em 0.2em 0.1em ${props => props.theme.darkPurple}a0;
    margin: 1em;
  }
  h1{
    font-family: ${props => props.theme.display};
    font-size: 3em;
    color: white;
    text-shadow: 0.05em 0.04em ${props => props.theme.darkPurple};
    margin: 0;
    text-align: center;
  }
  p {
    font-size: 1.2em;
    text-indent: 3em;
    font-family: ${props => props.theme.serif}
  }
`

export default () => <StyledAbout>
  <h1>About</h1>
  <div className="section">
    <p>
      This is an open source project with the goal of eventually becoming one of the most powerful music theory libraries in Python.
      It aims to be of high technical quality in both the code and the musical practices it represents.
    </p>
    <p>
      The focus of PyMusician is not on audio but on composition/analysis. For example, it can automate
      musical intervals, spell chords and modes, and convert notes to their scientific frequency and vice versa.
    </p>
  </div>
  <h1>The Author</h1>
  <div className="section">
    <p>
      My name is Scott Morse, and this project is, in a way, my first ever
      tech project. I learned to code for the first time only a week before joining a cruise ship as 
      a resident jazz guitarist. I used my knowledge of music theory to practice implementing difficult logic 
      into code, since I was fast with music but slow with code, but I knew all the same structures 
      would translate into code (scales are like arrays, etc.).
    </p>
    <p>
      My continued practice is what became 
      this library. This code contains code I wrote within the first few weeks I programmed, and code I 
      may have written last week. Therefore, your skillful refactoring would be appreciated.
    </p>
  </div>
</StyledAbout>