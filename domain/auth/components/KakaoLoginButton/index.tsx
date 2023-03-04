import Link from "next/link";

import { KAKAO_AUTH_URL } from "@/domain/auth/constants/kakaoAuth";

import { KakaoIcon } from "./KakaoIcon";

export function KakaoLoginButton() {
  return (
    <Link
      href={KAKAO_AUTH_URL}
      className="flex gap-2 p-3 px-6 bg-[#FEE500] text-black rounded-lg active:translate-y-px"
    >
      <KakaoIcon />
      카카오로 로그인하기
    </Link>
  );
}
