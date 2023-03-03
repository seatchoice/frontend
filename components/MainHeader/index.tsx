import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Button, Icon, Dropdown } from '@/components';
import { useAuth } from '@/domain/auth/hooks/useAuth';
import { useLogout } from '@/domain/auth/hooks/query';

const LoginModal = dynamic(
  () => import('@/domain/auth/components').then(({ LoginModal }) => LoginModal),
  { ssr: false }
);

export function MainHeader() {
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();
  const { mutate: logout } = useLogout();
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex justify-between items-center min-h-[70px] px-6">
      <Link href="/">
        <Icon as="logo" className="fill-primary-500" />
      </Link>
      <div className="flex flex-row gap-1">
        {user ? (
          <div className="flex items-center gap-4">
            <Link href="/notification">
              <Icon as="notification" />
            </Link>
            <Dropdown
              buttonText={user.nickname}
              items={[
                { content: user.nickname },
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
            <Button as="icon" onClick={() => setShowModal(true)}>
              로그인
            </Button>
            <LoginModal showModal={showModal} setShowModal={setShowModal} />
          </>
        )}
        <Button
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
          }}>
          {theme === 'dark' ? 'light' : 'dark'}
        </Button>
      </div>
    </header>
  );
}
