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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainHeader />
        <Search />
      </main>
    </>
  );
}
