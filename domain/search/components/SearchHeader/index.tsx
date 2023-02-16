import { useRouter } from 'next/router';
import { Button } from '@/components';
import { useEffect } from 'react';

export default function SearchHeader() {
  const router = useRouter();

  const handleDark = () => {
    localStorage.setItem(
      'darkMode',
      document.querySelector('html')?.classList.toggle('dark')
    );
  };

  const handleLogin = () => {
    router.push('login');
  };

  return (
    <header className="flex justify-between mb-2">
      <h1 className="text-4xl">자리어때</h1>
      <span>
        <Button children={'KAKAO LOGIN'} onClick={handleLogin}></Button>
        <Button children={'DARK'} onClick={handleDark}></Button>
      </span>
    </header>
  );
}
