import { ComponentProps, Suspense, useState, useEffect } from "react";

function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

export function SSRSuspense(props: ComponentProps<typeof Suspense>) {
  const isMounted = useMounted();

  if (!isMounted) {
    return <>{props.fallback}</>;
  }

  return <Suspense {...props} />;
}
