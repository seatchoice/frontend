import Head from "next/head";

import Search from "@/domain/search";
import { MainHeader } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>자리어때 | Seat Choice</title>
        <meta name="description" content="공연장 좌석 리뷰 사이트" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="자리어때" />
        <meta property="og:title" content="자리어때 | Seat Choice" />
        <meta property="twitter:title" content="자리어때 | Seat Choice" />
        <meta name="og:description" content="공연장 좌석 리뷰 사이트" />
        <meta name="twitter:description" content="공연장 좌석 리뷰 사이트" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainHeader />
        <Search />
      </main>
    </>
  );
}
