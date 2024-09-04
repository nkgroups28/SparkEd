'use client'

import {usePathname} from 'next/navigation';
import {useState} from 'react';
import Info from './Info';

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [showInfoDiv, setShowInfoDiv] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setToggleNavbar(!toggleNavbar);
  };

  const handleShowInfo = () => {
    setShowInfoDiv(!showInfoDiv);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../sparked.png" alt="" className='invert sepia brightness-200 rounded-full h-10' />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SparkEd</span>
        </a>
        <button
          onClick={handleToggle}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={toggleNavbar ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${toggleNavbar ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/micro-scholarship"
                className={`block py-2 px-3 rounded md:p-0 ${pathname.includes('/micro-scholarship') ? 'text-blue-700' : 'text-white'} dark:text-${pathname.includes('/micro-scholarship') ? 'blue-500' : 'white'}`}
                aria-current="page"
              >
                <div className="text-center"> 
                  <span>Micro</span>
                  <span> Scholarship</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/micro-loan"
                className={`block py-2 px-3 rounded md:p-0 ${pathname.includes('/micro-loan') ? 'text-blue-700' : 'text-gray-900'} dark:text-${pathname.includes('/micro-loan') ? 'blue-500' : 'white'}`}
              >
                <div className="text-center"> 
                  <span>Micro</span>
                  <span> Loan</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/quizzes"
                className={`block py-2 px-3 rounded md:p-0 ${pathname.includes('/quizzes') ? 'text-blue-700' : 'text-gray-900'} dark:text-${pathname.includes('/quizzes') ? 'blue-500' : 'white'}`}
              >
                Quizzes
              </a>
            </li>
            
            <li className="cursor-pointer">
              <div onClick={handleShowInfo}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={`${showInfoDiv ? "block" : "hidden"} absolute left-0 bg-slate-900 w-full border-t-2 top-16 z-10`}>
                <Info />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
