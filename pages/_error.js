import styled from 'styled-components'

const StyledErrorPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${props => props.theme.pink};
  height: 2em;
  padding-top: 0.2em;
  font-size: 2em;
  margin-top: 2em;
`

export default () => <StyledErrorPage>
  404 Error: Page not found
</StyledErrorPage>