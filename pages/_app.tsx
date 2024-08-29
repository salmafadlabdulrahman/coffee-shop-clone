import type { AppProps } from "next/app";
import "../src/styles/index.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import NavBar from "../src/components/NavBar"
import Sidebar from "../src/components/Sidebar";

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
        <div className="flex items-center justify-center bg-[#fff6df] pt-2 pb-2">
          <h4 className="text-[#7e4015] ">All prices are tax inclusive</h4>
        </div>
        <Sidebar />
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
