import { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/global.css";
import "@/styles/global.scss";

import { wrapper } from "../store/store";

config.autoAddCss = false;

export const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);
