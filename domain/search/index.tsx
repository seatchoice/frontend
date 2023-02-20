import { api } from '@/api';
import { useState } from 'react';

import SearchHeader from './components/SearchHeader';
import SearchBar from './components/SearchBar';
import Theaters from './components/Theater/Theaters';

export default function Search() {
  const [search, setSearch] = useState({
    theaters: [],
    searchStr: '',
    pageSize: 10,
    nomore: false,
  });

  const handleSearchForm: Promise<void> = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const searchStr = e.target.theater.value;

      await api
        .get(`/api/search/facility?name=${searchStr}&size=${search.pageSize}`)
        .then(({ data }) => {
          setSearch({
            searchStr,
            theaters: data.data,
            pageSize: search.pageSize,
            nomore: false,
          });
        });
    } catch (err) {
      // if (err.response.status === 502) console.log('502 err');
      console.log(err);
    } finally {
      e.target.theater.value = '';
    }
  };

  const getMoreSearched = async () => {
    try {
      await api
        .get(
          `/api/search/facility?name=${search.searchStr}&size=${search.pageSize}&after=${
            search.theaters.at(-1).id
          }`
        )
        .then(({ data }) => {
          const searchedArr = data.data;
          if (searchedArr.length === 0) {
            setSearch({ ...search, nomore: true });
            return;
          }

          setSearch({
            searchStr: search.searchStr,
            theaters: [...search.theaters, ...data.data],
            pageSize: search.pageSize,
            nomore: false,
          });
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="m-8">
      <SearchHeader />
      <SearchBar handleSearchForm={handleSearchForm} />
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
