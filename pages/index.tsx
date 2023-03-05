import Head from "next/head";

import Search from "@/domain/search";
import { MainHeader } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Seat Choice</title>
        <meta name="description" content="공연장 좌석 리뷰 사이트" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seat Choice" />
        <meta property="twitter:title" content="Seat Choice" />
        <meta property="og:description" content="공연장 좌석 리뷰 사이트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainHeader />
        <Search />
      </main>
    </>
  );
}
