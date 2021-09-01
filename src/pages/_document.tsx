import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="author" content="Will"/>
          <meta name="description" content="Saite"/>

          <meta property="og:image" content="https://github.com/GiverPlay007.png"/>
          <meta property="og:description" content="Saite dos bão"/>
          <meta property="og:title" content="GiverPlay - Portfolio"/>

          <link rel="shortcut icon" href="/favicon.png" type="png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}