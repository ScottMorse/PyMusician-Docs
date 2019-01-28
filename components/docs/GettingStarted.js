import DocContainer from './DocContainer'
import styled from 'styled-components'

const PipAnim = styled.div`
  margin-top: 1em;
  .pip{
    display: flex;
    background-color: ${props => props.theme.darkPurple};
    padding: 1em;
    color: white;
    margin-top: -1em;
    font-family: ${props => props.theme.mono};
    box-shadow:  0.1em 0.1em 0.1em ${props => props.theme.darkPurple}a0;
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
`

export default () => <DocContainer title="Getting Started">
  <section>
    <h2>PyMusician: Introduction</h2>
    <p>
      This is a python package for representing musical structures. Its features have less to do with audio file production/management, and more with analysis and composition. However, the concepts represented here could be combined with other music/audio related code to make sophisticated musical projects.  
    </p>
    <p>
      PyMusician isn't meant to be a stand-alone interface or notation program, but its purpose is to be able to automate all the music-theory related data that would go into such applications.
    </p>
    <p>
      If you have not used PyMusician before, it is important to read and learn about each class and function, as many core values and ideas of this code reappear in other sections, especially the properties and methods of the Note class.
    </p>
  </section>
  <section>
    <h2>Prerequisites (What do I need?)</h2>
    <p>You need an installation of Python 3.6 or higher. To make use of this package, you should have a strong grasp of Python's object-oriented programming and a strong grasp on common Western music theory.</p>
  </section>
  <section>
    <h2>Installation</h2>
    <p>
      PyMusician is part of the Python Package Index. It's name is "pymusician" for installation/importing. It's easy to install PyMusician with a simple pip command from your terminal:
    </p>
    <PipAnim><div className="pip"><span>$ </span> pip install pymusician<div className="input"></div></div></PipAnim>
  </section>
</DocContainer>