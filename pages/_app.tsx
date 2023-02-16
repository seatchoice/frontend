import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({}));
  useEffect(() => {
    document
      .querySelector('html')
      ?.classList.toggle(
        'dark',
        JSON.parse(localStorage.getItem('darkMode')) ??
          window.matchMedia('(prefers-color-scheme: dark)').matches
      );
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
