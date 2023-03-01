import Head from 'next/head';

import Search from '@/domain/search';
import { MainHeader } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seat Choice</title>
        <meta name="description" content="Seat view review site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainHeader />
        <Search />
      </main>
    </>
  );
}
