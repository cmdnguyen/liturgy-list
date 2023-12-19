import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
// import '../app/globals.css'
import Navbar from "../components/Navbar";
import { ChakraProvider, chakra, ColorModeProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeProvider
        options={{
          initialColorMode: "dark",
          useSystemColorMode: false,
        }}
      >
        <Fragment>
          <Head>
            <title>TNTT Liturgy List</title>
          </Head>
        </Fragment>
        <chakra.header id="header" bg="blue.600">
          <Navbar />
        </chakra.header>
        <Component {...pageProps} />
        <Footer />
      </ColorModeProvider>
    </ChakraProvider>
  );
}
