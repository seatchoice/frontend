import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { Button, Icon, Dropdown } from "@/components";
import { useAuth } from "@/domain/auth/hooks/useAuth";
import { useLogout } from "@/domain/auth/hooks/query";

const LoginModal = dynamic(
  () => import("@/domain/auth/components").then(({ LoginModal }) => LoginModal),
  { ssr: false }
);

export function MainHeader() {
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();
  const { mutate: logout } = useLogout();
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <Icon as="logo" className="fill-primary-500" />
      </Link>
      {user ? (
        <div className="flex items-center gap-4">
          <Link href="/notification">
            <Icon as="notification" />
          </Link>
          <Dropdown
            buttonText={user}
            items={[
              { content: user },
              {
                content: (
                  <Button as="icon" onClick={() => logout()}>
                    로그아웃
                  </Button>
                ),
              },
            ]}
          />
        </div>
      ) : (
        <>
          <Button onClick={() => setShowModal(true)} as="icon">
            로그인
          </Button>
          <LoginModal showModal={showModal} setShowModal={setShowModal} />
        </>
      )}
    </header>
  );
}
