import type { AppProps } from "next/app";
import "../src/styles/index.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import NavBar from "../src/components/NavBar"

const montserrat = Montserrat({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="./cilantro-logo.png" />
        <title>Cilantro</title>
      </Head>

      <main className={montserrat.className}>
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;