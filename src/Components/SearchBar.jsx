import React from 'react';

function SearchBar({ query, onQueryChange, onSubmit }) {
    const handleChange = (event) => {
        onQueryChange(event.target.value);
    };

    return (
        <div className="md:w-80 sm:w-full">
            <div className="relative flex w-full flex-wrap items-stretch">
                <input
                    type="search"
                    className="m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-white bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                    placeholder="Search Dua"
                    aria-label="Search Dua"
                    aria-describedby="button-addon1"
                    value={query}
                    onChange={handleChange}
                />
                <button
                    data-te-ripple-init
                    data-te-ripple-color="danger"
                    className="bg-blue-700 border border-white relative z-[2] flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                    onClick={onSubmit}
                    >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clipRule="evenodd" />
                    </svg>
                </button>
                {/* </TERipple> */}
            </div>
        </div>
    );
}

export default SearchBar;