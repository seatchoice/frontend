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
  const [autoBool, setautoBool] = useState<boolean>(false);

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

  const handleAuto3 = (event: React.MouseEvent) => {
    const target = event.target as HTMLDivElement;
    const current = searchInput.current as HTMLInputElement;
    current.value = String(target.textContent);
    setautoBool(false);
  };

  const getAutoComplelte = (event: React.FormEvent<HTMLFormElement>) => {
    handleAutocomplete(event);
    setFocusIdx(1);
    setautoBool(true);
  };

  return (
    <div className="flex flex-col gap-1 sm:flex-row  sm:items-stretch mb-2">
      <Dropdown handleSearchType={handleSearchType} />
      <form
        className="relative flex-grow items-center"
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          handleSearchForm(event);
          setautoBool(false);
        }}
        onChange={getAutoComplelte}
        onKeyDown={handleAuto}>
        <input
          ref={searchInput}
          name="theater"
          type="text"
          autoComplete="off"
          placeholder="공연장을 검색하세요."
          className="w-full rounded-md py-2.5  indent-2 pb-4
          border border-slate-900
          bg-white dark:bg-slate-900 
          text-black dark:text-white pr-10 shadow-sm"
        />

        <SearchIcon />
      </form>
      {auto.length > 0 ? (
        <div
          ref={autocompleteDiv}
          className={`z-50 absolute p-2 text-sm shadow-lg 
            rounded border border-slate-900
            dark:bg-black bg-white
            left-36 mt-10 ${autoBool ? '' : 'hidden'}`}
          onKeyDown={handleAuto2}>
          <label htmlFor="" className="text-stone-300">
            자동완성
          </label>
          {auto.map(({ id, name }) => (
            <div
              tabIndex={0}
              className="hover:border-black hover:border hover:rounded hover:p-2"
              onClick={handleAuto3}
              key={id}>
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
