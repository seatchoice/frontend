import { useRef, useState } from 'react';

import Dropdown from './Dropdown';
import SearchIcon from './SearchIcon';

type auto = {
  id: number;
  name: string;
};
type SearchBarProps = {
  handleSearchType: (type: string) => void;
  handleSearchForm: (event: React.FormEvent<HTMLFormElement>) => void;
  handleAutocomplete: (event: React.FormEvent<HTMLFormElement>) => void;
  auto: auto[];
};

export default function SearchBar({
  handleSearchForm,
  handleSearchType,
  handleAutocomplete,
  auto,
}: SearchBarProps) {
  const [focusIdx, setFocusIdx] = useState<number>(1);
  const autocompleteDiv = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);

  const handleAuto = (event: React.KeyboardEvent) => {
    try {
      const arrows = ['ArrowUp', 'ArrowDown'];
      const { key } = event;
      if (arrows.includes(key)) {
        const { children } = autocompleteDiv.current as HTMLDivElement;
        (children[focusIdx] as HTMLElement).focus();
      }
    } catch (err) {
      console.log('null');
    }
  };

  const handleAuto2 = (event: React.KeyboardEvent) => {
    const arrows = ['ArrowUp', 'ArrowDown'];

    if (event.key === 'Enter') {
      if (searchInput.current) {
        searchInput.current.value = (event.target as HTMLDivElement).textContent ?? '';
        searchInput.current.focus();
      }
    }

    if (!arrows.includes(event.key)) return;
    const calc = event.key === 'ArrowDown' ? focusIdx + 1 : focusIdx - 1;
    setFocusIdx(calc === 0 ? auto.length : calc === auto.length + 1 ? 1 : calc);
    const { children } = autocompleteDiv.current as HTMLDivElement;
    (children[focusIdx] as HTMLElement).focus();
  };

  const getAutoComplelte = (event: React.FormEvent<HTMLFormElement>) => {
    handleAutocomplete(event);
    setFocusIdx(1);
  };

  return (
    <div className="flex flex-row items-stretch mb-2">
      <Dropdown handleSearchType={handleSearchType} />
      <form
        className="relative flex-grow"
        onSubmit={handleSearchForm}
        onChange={getAutoComplelte}
        onKeyDown={handleAuto}>
        <input
          ref={searchInput}
          name="theater"
          type="text"
          autoComplete="off"
          placeholder="공연장을 검색하세요."
          className="w-full rounded-md border-gray-200 py-2.5  indent-2 pb-4
          bg-white dark:bg-slate-900 
          text-black dark:text-white pr-10 shadow-sm"
        />

        <SearchIcon />
      </form>
      {auto.length > 0 ? (
        <div
          ref={autocompleteDiv}
          className="z-50 absolute p-2 text-sm shadow-lg 
            dark:bg-slate-900 rounded border border-white
            left-36 mt-10"
          onKeyDown={handleAuto2}>
          <label htmlFor="" className="text-stone-300">
            자동완성
          </label>
          {auto.map(({ id, name }) => (
            <div tabIndex={0} className="" key={id}>
              {name}
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
