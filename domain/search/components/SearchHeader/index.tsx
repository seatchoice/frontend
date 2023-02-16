import { useState, useEffect } from 'react';

import { Button } from '@/components';

export default function SearchHeader() {
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
  return (
    <header className="flex justify-between mb-2">
      <h1 className="text-4xl">자리어때</h1>
      <Button children={'DARK'} onClick={handleDark}></Button>
    </header>
  );
}
