import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    font-family: ${props => props.theme.display};
    font-size: 3em;
    color: white;
    text-shadow: 0.04em 0.04em ${props => props.theme.darkPurple};
  }
`

export default () => <StyledAbout>
  <h1>About</h1>
  <p></p>
</StyledAbout>