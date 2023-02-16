import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components';

export default function SearchHeader() {
  const router = useRouter();
  const [dark, setDark] = useState(false);
  let html;

  useEffect(() => {
    setDark(JSON.parse(localStorage.getItem('darkMode')) || false);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', dark);
    document.querySelector('html').classList.toggle('dark', dark);
  }, [dark]);

  const handleDark = () => {
    setDark(!dark);
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
