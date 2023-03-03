import { useState } from "react";
import { BackButton, Button, Icon, Text } from "@/components";
import { LoginModal } from "../LoginModal";

export function LoginRequired() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <BackButton />
      <div className="flex flex-col items-center gap-4">
        <Button as="icon">
          <Icon as="logo" />
        </Button>
        <Text className="text-lg font-semibold">
          로그인 후 사용할 수 있습니다.
        </Text>
        <Button onClick={() => setShowModal(true)}>로그인하기</Button>
      </div>
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
