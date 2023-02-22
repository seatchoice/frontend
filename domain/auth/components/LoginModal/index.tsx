import dynamic from "next/dynamic";

import { Text, Button, Icon } from "@/components";
import { KakaoLoginButton } from "@/domain/auth/components";
import { StateAndAction } from "@/types/state";

const Modal = dynamic(
  () => import("@/components/Modal").then(({ Modal }) => Modal),
  { ssr: false }
);

type LoginModalProps<T extends React.ElementType> = Component<T> &
  StateAndAction<boolean, "showModal">;

export function LoginModal({
  showModal,
  setShowModal,
}: LoginModalProps<"div">) {
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
