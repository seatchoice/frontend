import type { AppProps } from "next/app";
import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import { pretendard } from "@/styles/font";
import { Loading, SSRSuspense, Toast } from "@/components";
import { ToastProvider } from "@/contexts/Toast";

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
        <ThemeProvider attribute="class">
          <SSRSuspense fallback={<Loading content="로딩 중..." />}>
            <ToastProvider>
              <main className={`${pretendard.variable} font-pretendard`}>
                <Component {...pageProps} />
              </main>
              <Toast />
            </ToastProvider>
          </SSRSuspense>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
