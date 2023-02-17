import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import { Button } from '@/components';

export default function SearchHeader() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const handleLogin = () => {
    router.push('login');
  };

  const handleDark = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
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
