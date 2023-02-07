import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko-KR" className="dark">
      <Head />
      <body className="bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
