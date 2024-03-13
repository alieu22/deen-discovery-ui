//import React from "react";

function NavBar() {
  return (
    <nav className="navbar-brown">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Application name */}
          <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="block lg:hidden h-8 w-auto text-white text-lg font-semibold">
                Deen Discovery
              </a>
              <a href="/" className="hidden lg:block h-8 w-auto text-white text-lg font-semibold">
                Deen Discovery
              </a>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden sm:block sm:ml-6">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-300 hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="Dashboard" className="text-gray-300 hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </a>
              </li>
              <li className="group relative">
                <a href="Course" className="text-gray-300 hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Courses
                </a>
                <div className="absolute hidden bg-blue-900 text-white group-hover:block mt-2 space-y-2 py-2 rounded-md">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-800 hover:text-white">Islamic Studies</a>
                  <a href="DuaSearch" className="block px-4 py-2 text-sm hover:bg-blue-800 hover:text-white">Dua Search</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-800 hover:text-white">Discussions</a>
                </div>
              </li>
              <li>
                <a href="qibla-compass" className="text-gray-300 hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Qibla Compass
                </a>
              </li>
              
              <li>
                <a href="signup" className="text-gray-300 hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Register
                </a>
              </li>
              <li>
                <a href="Login" className="text-gray-300 hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Navigation Icon */}
          <div className="flex -mr-2 sm:hidden">
            <button className="text-white p-2 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Add your mobile navigation links here */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
