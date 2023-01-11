import "@/styles/globals.css";
import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Anurag"
        canonical="https://anurag.tech"
        openGraph={{
          url: "https://anurag.tech",
          title: "Anurag",
        }}
      />
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
