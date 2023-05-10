import React from "react";

function Navbar() {
  return (
    <nav className="flex mt-4 items-center justify-between flex-wrap bg-white text-indigo-800 p-6 shadow-blue-800 shadow-lg">
      <div className="flex items-center flex-shrink-0 text-indigo-600 mr-6">
        <span className="font-semibold text-xl mr-24 tracking-tight">My App</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-indigo-600 border-indigo-800 hover:text-white hover:indigo-400">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:indigo-400 mr-4"
          >
            Profile
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:indigo-400 mr-4"
          >
            Challenges
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:indigo-400 mr-4"
          >
            About Us
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:indigo-400"
          >
            FAQs
          </a>
        </div>

        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-indigo-600 border-indigo-600 hover:border-transparent hover:text-indigo-600 hover:bg-white mt-4 lg:mt-0"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
