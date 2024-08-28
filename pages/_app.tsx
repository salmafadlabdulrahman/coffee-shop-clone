import type { AppProps } from "next/app";
import "../src/styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cilantro</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;