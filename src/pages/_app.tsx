import { useEffect } from "react";
import { useRouter } from "next/router";
import { ChakraProvider, createLocalStorageManager } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import "@fontsource/inter/latin.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Layout from "components/layout";

import customTheme from "styles/customTheme";
import "styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const manager = createLocalStorageManager("hire-justin-zhang");

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      // @ts-ignore
      window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={customTheme} colorModeManager={manager}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <title>Hire Justin Zhang | Product Engineer</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <SpeedInsights />
    </ChakraProvider>
  );
};

export default MyApp;
