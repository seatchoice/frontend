import Router, { useRouter } from "next/router";

type Options = {
  suspense?: boolean;
};

function waitForRouterReady() {
  return new Promise<void>((resolve) => {
    Router.ready(resolve);
  });
}

export function useNextRouter(options: Options = { suspense: true }) {
  const router = useRouter();

  if (options.suspense && !router.isReady) {
    throw waitForRouterReady();
  }

  return router;
}
