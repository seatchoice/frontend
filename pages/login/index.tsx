import dynamic from "next/dynamic";
import { useState } from "react";

import { Text, Button, Icon } from "@/components";
import { KakaoLoginButton } from "@/domain/login/components";

const Modal = dynamic(
  () => import("@/components/Modal").then(({ Modal }) => Modal),
  { ssr: false }
);

export default function Login() {
  const [showModal, setShowModal] = useState(true);

  return (
    <Modal open={showModal} className="min-w-[400px]">
      <header className="flex justify-between items-center">
        <Text as="h4">로그인하기</Text>
        <Button as="icon" onClick={() => setShowModal(false)}>
          <Icon as="close" />
        </Button>
      </header>
      <KakaoLoginButton />
    </Modal>
  );
}
