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
    type: 'FACILITY',
  });

  const handleSearchForm: Promise<void> = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const searchStr = e.target.theater.value;

      await api.get(`/search?type=FACILITY&name=${searchStr}`).then(({ data }) => {
        setSearch({
          searchStr,
          theaters: data,
          pageSize: search.pageSize,
          nomore: false,
          type: 'FACILITY',
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
          `/search?type=FACILITY&name=${search.searchStr}&after=${
            search.theaters.at(-1).id
          }`
        )
        .then(({ data }) => {
          const searchedArr = data;
          if (searchedArr.length === 0) {
            setSearch({ ...search, nomore: true });
            return;
          }

          setSearch({
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
