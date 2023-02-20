import type { AppProps } from "next/app";
import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";

import "@/styles/globals.css";
import { SSRSuspense, Toast } from "@/components";
import { ToastProvider } from "@/context/Toast";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SSRSuspense fallback={<div>Loading...</div>}>
          <ToastProvider>
            <Component {...pageProps} />
            <Toast />
          </ToastProvider>
        </SSRSuspense>
      </Hydrate>
    </QueryClientProvider>
  );
}
