import "tailwindcss/tailwind.css";
import { RefactorActionInfo } from "typescript";
import "../input.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
