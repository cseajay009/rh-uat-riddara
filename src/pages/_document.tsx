import Document, { Html, Head, Main, NextScript } from 'next/document';
import { DocumentContext, DocumentInitialProps } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <Script src="/scripts/app.6e44e576.js" strategy="beforeInteractive" />
          <Script src="/scripts/chunk-2d354ce6.c7dfa611.js" strategy="beforeInteractive" />
          <Script src="/scripts/eruda.js" strategy="beforeInteractive" />
          <Script src="/scripts/vendor.b15933fe.js" strategy="afterInteractive" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
