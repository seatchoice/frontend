import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko-KR">
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="자리어때" />
        <meta property="og:title" content="자리어때 | Seat Choice" />
        <meta name="og:description" content="공연장 좌석 리뷰 사이트" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/seatchoice/frontend/develop/public/logo.png"
        />
        <meta property="twitter:title" content="자리어때 | Seat Choice" />
        <meta name="twitter:description" content="공연장 좌석 리뷰 사이트" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/seatchoice/frontend/develop/public/logo.png"
        />
      </Head>
      <body className="bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
