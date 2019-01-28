import App, { Container } from 'next/app'
import Page from '../components/layout/Page'
import { PageTransition } from '../next-page-transitions-fixed/index'


export default class MyApp extends App {

  static async getInitialProps({ Component, ctx }){
    let pageProps = {}
    if(Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query
    pageProps.pathname = ctx.pathname
    return { pageProps }
  }

  render(){
    const { Component, pageProps } = this.props
    return <Container>
        <Page {...pageProps}>
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps}/>
          </PageTransition>
        </Page>
      </Container>
  }
}