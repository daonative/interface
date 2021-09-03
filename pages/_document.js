import { ServerStyleSheet } from "styled-components";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <script
            defer
            data-domain="prologe.press"
            src="https://plausible.io/js/plausible.js"
          />
          <meta
            name="title"
            content="prologe.press | Earn money while supporting creators"
          />
          <meta
            name="description"
            content="Decentralized publishing platform where writers' and readers' interests are aligned. Readers request & vote on topics. Writers compete on topics to get funding."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.prologe.press/" />
          <meta property="og:title" content="prologe.press " />
          <meta
            property="og:description"
            content="Decentralized publishing platform where writers' and readers' interests are aligned. Readers request & vote on topics. Writers compete on topics to get funding."
          />
          <meta property="og:image" content="/prologe-seo.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.prologe.press/" />
          <meta property="twitter:title" content="prologe.press" />
          <meta
            property="twitter:description"
            content="Decentralized publishing platform where writers' and readers' interests are aligned. Readers request & vote on topics. Writers compete on topics to get funding."
          />
          <meta property="twitter:image" content="/prologe-seo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
