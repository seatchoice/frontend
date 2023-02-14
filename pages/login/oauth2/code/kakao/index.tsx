import { useRouter } from "next/router";
import { useEffect } from "react";

import { useLogin } from "@/domain/login/hooks/query";

export default function KakaoAuth() {
  const router = useRouter();
  const {
    query: { code: kakaoAuthCode },
  } = router;
  const { mutate: login } = useLogin();

  useEffect(() => {
    if (kakaoAuthCode) {
      login(kakaoAuthCode as string);

      router.replace("/");
    }
  }, [kakaoAuthCode]);

  return null;
}
