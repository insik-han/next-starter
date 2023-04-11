import { type AppProps } from "next/app";

import { Head } from "src/components/common";
import { fontPretendard } from "src/fonts";

import "src/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <style jsx global>{`
        :root {
          --font-pretendard: ${fontPretendard.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
