import Header from '../components/Header'
import Meta from '../components/Meta'
import Footer from '../components/Footer'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  attribute: "value"
}

const StyledPage = styled.div`
`

export default class Page extends Component {
  render(){
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta/>
          <Header/>
          <Footer/>
        </StyledPage>
      </ThemeProvider>
    )
  }
}