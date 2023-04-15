import type { AppProps } from "next/app";
import AppLayout from "../components/global/AppLayout";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/theme";
import "../assets/font/font.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}
