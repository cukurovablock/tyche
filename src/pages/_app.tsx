import { AppProvider } from "@/contexts/AppContext";
import { AppProps } from "next/app";
import "../styles/globals.css"; // Dosya yolunu doğru şekilde ayarlayın

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
