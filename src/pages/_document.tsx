import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript, theme } from "@chakra-ui/react";

const APP_NAME = "Hire Justin Zhang";
const PREVIEW_IMAGE = "https://hirejustinzhang.com/preview-image.png";
const DESCRIPTION =
  "An interactive cover letter to highlight who I am beyond the resume - I am a product-minded Software Engineer with a background in business & design";
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#3182CE" />

          {/* add your own app-icon */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="shortcut icon" href="/app-icon.png" /> */}
          <link rel="manifest" href="/manifest.json" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          <meta name="description" content={DESCRIPTION} />

          <meta itemProp="name" content="Hire Justin Zhang" />
          <meta itemProp="description" content={DESCRIPTION} />
          <meta itemProp="image" content={PREVIEW_IMAGE} />
          <meta name="author" content="Justin Zhang" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@justinnzhang" />
          <meta name="twitter:title" content="Hire Justin Zhang" />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta name="twitter:creator" content="@justinnzhang" />
          <meta name="twitter:image" content={PREVIEW_IMAGE} />
          <meta
            name="twitter:image:alt"
            content="Blue to purple gradient with the text: An interactive cover letter, let’s start the conversation! Followed by a memoji representation of Justin Zhang's face"
          />

          <meta property="og:title" content="Hire Justin Zhang" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hirejustinzhang.com" />
          <meta property="og:image" content={PREVIEW_IMAGE} />
          <meta property="og:image:url" content={PREVIEW_IMAGE} />
          <meta
            property="og:image:alt"
            content="Blue to purple gradient with the text: Seeking Summer 2022 Product Management Internships, An interactive cover letter, let’s start the conversation! Followed by a memoji representation of Justin Zhang's face"
          />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:site_name" content="Hire Justin Zhang" />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
            storageKey="hire-justin-zhang"
            type="cookie"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
