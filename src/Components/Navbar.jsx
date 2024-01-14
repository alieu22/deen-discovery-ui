import React from "react";

function NavBar() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Application name */}
          <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <span className="block lg:hidden h-8 w-auto text-white text-lg font-semibold">
                Deen Discovery
              </span>
              <span className="hidden lg:block h-8 w-auto text-white text-lg font-semibold">
                Deen Discovery
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Prayer Times
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Quizzes
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Discussions
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Hadiths
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Fiqh
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Islamic Studies
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                News
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Dua Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
