import type { AppProps } from "next/app";
import AppLayout from "./AppLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
