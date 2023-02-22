import { useRouter } from "next/router";
import { useEffect } from "react";

import { useLogin } from "@/domain/auth/hooks/query";

export default function KakaoAuth() {
  const {
    query: { code: kakaoAuthCode },
  } = useRouter();
  const { mutate: login } = useLogin();

  useEffect(() => {
    if (kakaoAuthCode) {
      login(kakaoAuthCode as string);
    }
  }, [kakaoAuthCode, login]);

  return null;
}
