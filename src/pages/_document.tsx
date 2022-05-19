import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={'anonymous'}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="Felipe Pereira de Souza Silva" />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/Blackoutseeker/Felips-Apps/main/src/assets/images/favicon.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://raw.githubusercontent.com/Blackoutseeker/Felips-Apps/main/src/assets/images/favicon.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="80" />
          <meta property="og:image:height" content="80" />
          <meta property="og:image:alt" content="Felip's Apps" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
