import React, { useCallback, useState } from "react";
import Links from "../Links";

type MenuItem = {
  label: string;
  href: string;
};

type NavbarsProps = {
  menu: MenuItem[];
  iconNavbar?: React.ReactNode;
};

const Navbar = ({ menu, iconNavbar }: NavbarsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Track active menu index
  const [isShowMobile, setShowMobile] = useState<boolean>(false);

  const onClickMobile = useCallback(() => {
    setShowMobile(!isShowMobile);
  }, [isShowMobile]);

  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className="bg-white border-gray-200 px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Links href={"/"}>{iconNavbar}</Links>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isShowMobile}
          onClick={onClickMobile}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zM4 14a1 1 0 100 2h12a1 1 0 100-2H4z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isShowMobile ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            {menu?.map((itemMenu: MenuItem, index: number) => (
              <li key={index}>
                <Links
                  href={itemMenu?.href}
                  className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 ${
                    index === activeIndex
                      ? "md:text-blue-700 text-white bg-blue-700"
                      : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                  }`}
                  aria-current={index === activeIndex ? "page" : undefined}
                  onClick={() => handleMenuClick(index)}
                >
                  {itemMenu?.label}
                </Links>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
