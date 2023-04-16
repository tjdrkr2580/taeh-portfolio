import type { AppProps } from "next/app";
import AppLayout from "../components/global/AppLayout";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/theme";
import "../assets/font/font.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap";
    link.rel = "stylesheet";
    link.onload = () => setLoaded(true);
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}
