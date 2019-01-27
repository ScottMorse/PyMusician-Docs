import Header from '../components/Header'
import Meta from '../components/Meta'
import Footer from '../components/Footer'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  attribute: "value"
}

const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1;
  }
  body{
    margin: 0;
  }
`

export default class Page extends Component {
  render(){
    return <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Meta/>
        <Header/>
        <main>
          {this.props.children}
        </main>
        <Footer/>
      </ThemeProvider>
  }
}