import styled from 'styled-components'

const VersionsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    font-family: ${props => props.theme.display};
    font-size: 3em;
    color: white;
    text-shadow: 0.04em 0.04em ${props => props.theme.darkPurple};
  }
  .version{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
    background-color: ${props => props.theme.darkPurple};
    background-color: white;
    color: white;
    color: #202020;
    box-shadow:  0.2em 0.2em 0.1em ${props => props.theme.darkPurple}a0;
    width: 90vw;
    padding: 1em;
    @media screen and (min-width: 800px){
      width: 800px;
    }
  }
  .release{
    padding-bottom: 2em;
  }
`

export default () => <VersionsPage>
  <h1>Version History</h1>
  <div className="version">
    <h2 className="current">Current Version: 1.1.1</h2>
    <div className="date">January 26th, 2019</div>
    <ul>
      <li>Non-breaking project restructure.</li>
      <li>New module structure, separated tests, and some more efficient class properties.</li>
      <li>One uncaught unfinished function removed from production.</li>
    </ul>
  </div>
  <div className="version">
    <h2>Version: 1.1.0</h2>
    <div className="date">January 25th, 2019</div>
    <ul>
      <li>TimeSignature class added for representation of basic but highly dynamic time signatures.</li>
      <li>The value of A4 is now protected.</li>
      <li>Main classes all take named arguments instead of *args now (non-breaking)</li>
    </ul>
  </div>
  <div className="version">
    <h2>Version: 1.0.2</h2>
    <div className="date">December 27,2018</div>
    <ul>
      <li>Added code comments to init.py and utils.py(deprecated)</li>
      <li>Note class static methods such as Note.note_from_values and Note.note_from_frequency have been updated to allow passing optional rhythm and octave(for just Note.note_from_values) values into them, where they could not be before.</li>
      <li>Fixed bug where the "prefer" parameter for Note.note_from_hard_pitch made no effect on the result.</li>
    </ul>
  </div>
  <div className="version">
    <h2>Version: 1.0.1</h2>
    <div className="date">November 22, 2018</div>
    <ul>
      <li>Fixed error in the Note method .enharmonic() when the Note object has rhythm value</li>
      <li>Chord and Mode objects can be directly indexed and have a length with len(), referencing their spelling property</li>
      <li>Fixed bug where the "prefer" parameter for Note.note_from_hard_pitch made no effect on the result.</li>
    </ul>
  </div>
  <div className="version release">
    <h2>Release</h2>
    <div className="date">October 8, 2018</div>
  </div>
</VersionsPage>