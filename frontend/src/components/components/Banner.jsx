import React, { useState } from "react";

import { FiMap, FiMapPin, FiSearch } from "react-icons/fi";
const Banner = ({ query, handleInputChange }) => {
  //   const [query, setQuery] = useState("");

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 md:py-20 puy-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find your new job<span>today</span>{" "}
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands of jobs in the computer sectors are waiting for you.
      </p>
      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position are you looking for?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-grey-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={query}
            ></input>
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-insert ring-gray-300 focus-within:rg-2 focus-within:ring-indigo-600 md:w-1/3 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-grey-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            ></input>
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-blue py-t px-8 t-white md:rounded-s-none rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
