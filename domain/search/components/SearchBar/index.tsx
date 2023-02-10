import SearchIcon from './SearchIcon';

export default function SearchBar({ setTheaters }) {
  const searchSeat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('공연장을 검색했습니다. /api/theater_seat/:id');
    setTheaters([1, 2, 3]);
  };

  return (
    <>
      <form className="relative" onSubmit={searchSeat}>
        <input
          type="text"
          placeholder="공연장을 검색하세요."
          className="w-full rounded-md border-gray-200 py-2.5  indent-2 mb-4
          bg-white dark:bg-slate-900 
          text-black dark:text-white pr-10 shadow-sm sm:text-sm"
        />

        <SearchIcon />
      </form>
    </>
  );
}
