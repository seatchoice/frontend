import { useState } from "react";

import { Modal, Text, Button, Icon } from '@/components';

type DropdownProps = {
  handleSearchType: (type: string) => void;
};

export default function Dropdown({ handleSearchType }: DropdownProps) {
  const [menu, setMenu] = useState({
    visible: false,
    type: "FACILITY",
  });

  const [facilityMore, setFacilityMore] = useState<boolean>(false);

  const handleDropdown = () => {
    setMenu({
      ...menu,
      visible: !menu.visible,
    });
  };

  const handleDropMenu = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
    const type =
      (target as HTMLButtonElement).textContent === "공연"
        ? "PERFORMANCE"
        : "FACILITY";

    setMenu({
      visible: false,
      type,
    });
    handleSearchType(type);
  };

  return (
    <div className="relative dark:bg-dark-bg bg-light-bg mb-2 sm:mb-0">
      <div
        className="h-full inline-flex items-center divide-x divide-black/10 dark:divide-dark-fg 
      overflow-hidden rounded-md dark:bg-dark-fg bg-white border-2 border-black/10 dark:border-dark-fg"
      >
        <label className="px-4 py-2 text-md leading-none text-gray-600 dark:text-gray-300 hover:bg-gray-50 hover:text-gray-700">
          {menu.type === "FACILITY" ? "공연시설" : "공연"}
        </label>

        <button
          onClick={handleDropdown}
          className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700
          "
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d={
                menu.visible
                  ? "m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
                  : "M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
              }
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`absolute left-0 z-10 mt-2 w-56 rounded-md border border-gray-100 
        bg-inherit shadow-lg ${menu.visible ? "" : "hidden"}`}
        role="menu"
      >
        <div className="p-2">
          <div className="flex flex-row justify-between">
            <button
              onClick={handleDropMenu}
              className="block rounded-lg px-4 py-2 text-sm hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              공연시설
            </button>
          </div>

          <div className="flex flex-row justify-between">
            <button
              onClick={handleDropMenu}
              className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              공연
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
