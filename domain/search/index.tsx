import { useState } from 'react';

import SearchBar from './components/SearchBar';
import Theaters from './components/Theater/Theaters';

export default function Search() {
  const [theaters, setTheaters] = useState([]);

  return (
    <section className="m-8">
      <h1 className="text-4xl">자리어때</h1>
      <SearchBar setTheaters={setTheaters} />
      {theaters.length === 0 ? '' : <Theaters />}
    </section>
  );
}
