import { api } from '@/api';
import { useState } from 'react';

import { TheaterType } from './components/Theater/type';

import SearchHeader from './components/SearchHeader';
import SearchBar from './components/SearchBar';
import Theaters from './components/Theater/Theaters';

interface SearchInfo {
  theaters: TheaterType[];
  searchStr: string;
  pageSize: number;
  nomore: boolean;
  type: string;
}

export default function Search() {
  const [search, setSearch] = useState<SearchInfo>({
    theaters: [],
    searchStr: '',
    pageSize: 10,
    nomore: false,
    type: 'FACILITY',
  });

  const handleSearchForm = async (event: React.FormEvent<HTMLFormElement>) => {
    const { theater } = event.target as HTMLFormElement;
    try {
      event.preventDefault();

      const searchStr = theater.value;

      await api.get(`/search?type=${search.type}&name=${searchStr}`).then(({ data }) => {
        setSearch({
          searchStr,
          theaters: data,
          pageSize: search.pageSize,
          nomore: false,
          type: search.type,
        });
      });
    } catch (err) {
      // if (err.response.status === 502) console.log('502 err');
      console.log(err);
    } finally {
      theater.value = '';
    }
  };

  const getMoreSearched = async () => {
    try {
      await api
        .get(
          `/search?type=${search.type}&name=${search.searchStr}&after=${
            search?.theaters.at(-1)?.id
          }`
        )
        .then(({ data }) => {
          const searchedArr = data;
          if (searchedArr.length === 0) {
            setSearch({ ...search, nomore: true });
            return;
          }

          setSearch({
            ...search,
            searchStr: search.searchStr,
            theaters: [...search.theaters, ...searchedArr],
            pageSize: search.pageSize,
            nomore: false,
          });
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchType = (type: string) => {
    setSearch({ ...search, type });
  };

  return (
    <section className="m-8">
      <SearchHeader />
      <SearchBar
        handleSearchForm={handleSearchForm}
        handleSearchType={handleSearchType}
      />
      {search.theaters.length === 0 ? (
        ''
      ) : (
        <Theaters
          theaters={search.theaters}
          nomore={search.nomore}
          getMoreSearched={getMoreSearched}
        />
      )}
    </section>
  );
}
