import type { AppProps } from "next/app";
import "../src/styles/index.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cilantro</title>
      </Head>

      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;