import type { AppProps } from "next/app";

import "@styles/globals.scss";
import "@styles/DateTimePicker/DateTimePicker.css";
import "@styles/DateTimePicker/Calendar.css";
import GoogleAnalyticsHook from "@components/GoogleAnalyticsHook";
function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalyticsHook />
      <Component {...pageProps} />
    </>
  );
}

export default Application;
