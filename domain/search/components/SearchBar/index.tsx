import Dropdown from './Dropdown';
import SearchIcon from './SearchIcon';

export default function SearchBar({ handleSearchForm, handleSearchType }) {
  return (
    <div className="flex flex-row items-stretch mb-2">
      <Dropdown handleSearchType={handleSearchType} />
      <form className="relative flex-grow" onSubmit={handleSearchForm}>
        <input
          name="theater"
          type="text"
          placeholder="공연장을 검색하세요."
          className="w-full rounded-md border-gray-200 py-2.5  indent-2 pb-4
          bg-white dark:bg-slate-900 
          text-black dark:text-white pr-10 shadow-sm sm:text-sm"
        />

        <SearchIcon />
      </form>
    </div>
  );
}
