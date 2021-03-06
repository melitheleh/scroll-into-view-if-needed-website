import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const { description } = require('scroll-into-view-if-needed/package.json')
const { version: bulmaVersion } = require('bulma/package.json')

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>{description}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:description" content={description} />
          <meta name="description" content={description} />
          <link
            rel="stylesheet"
            // @TODO setup proper css loading
            href={`https://cdnjs.cloudflare.com/ajax/libs/bulma/${
              bulmaVersion
            }/css/bulma.min.css`}
          />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
