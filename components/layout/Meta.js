import Head from 'next/head'

export default (props) => {
  const { pathname, query: { page } } = props
  let title
  switch(pathname){
    case "/docs":
      title = "PyMusician: Docs"
      switch(page){
        case "getting-started":
          title += " (Getting Started)"
          break
        case "notes":
          title += " (Notes)"
          break
        case "intervals":
          title += " (Intervals)"
          break
        case "chords":
          title += " (Chords)"
          break
        case "modes":
          title += " (Modes)"
          break
        case "timesignatures":
          title += " (Time Signatures)"
          break
      }
      break
    case "/versions":
      title = "PyMusician: Versions"
      break
    case "/about":
      title = "PyMusician: About"
      break
    default:
      title = "PyMusician"
  }
  return <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="shortcut icon" href="/static/favicon.ico"/>
  </Head>
}