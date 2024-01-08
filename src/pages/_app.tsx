import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
import customTheme from "../theme/theme";
// import '../theme/globals.css'
import Navbar from "../components/Navbar";
import { ChakraProvider, chakra, ColorModeProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeProvider>
        <Fragment>
          <Head>
            <title>VEYM Liturgy</title>
            <link rel="icon" href="/monstrance-icon.jpg" />
          </Head>
        </Fragment>
        <chakra.header id="header">
          <Navbar />
        </chakra.header>
        <Component {...pageProps} />
        <Footer />
      </ColorModeProvider>
    </ChakraProvider>
  );
}
