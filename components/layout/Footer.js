import styled from 'styled-components'

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: darkslategray;
  height: 8em;
  font-size: 0.8em;
  background-color: lightgrey;
  /* position: absolute; */
  text-align: center;
  width: 100vw;
  div {
    max-width: 80vw;
  }
  .icons {
    a {
      color: blue;
    }
  }
  div {
    margin: 0.3em;
  }
`

export default () => <StyledFooter>
  <div>©2019 Scott Morse</div>
  <div>This website is built with Next.js and styled-components!</div>
  <div className="icons">Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons"> and Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> are licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

</StyledFooter>