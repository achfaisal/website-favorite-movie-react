import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { searchMovie } from "../api";

const Navbar = ({ updatePopularMovies }) => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      updatePopularMovies(query.results);
      console.log({ query: query });
    }
  };

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="text-white text-2xl font-bold italic">
              fav<span className="text-yellow-500">movies</span>
            </a>
          </div>
          {/* Hamburger */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isNavOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          {/* Hamburger end*/}
          <div className="hidden md:flex justify-end gap-10 items-center">
            <a
              href="/"
              className="text-white hover:text-yellow-500 text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-yellow-500 text-lg font-medium"
            >
              About Website
            </a>
            <div>
              <input
                type="text"
                placeholder="Search movies here"
                className="text-white hover:text-yellow-500 text-lg font-medium bg-transparent border-b border-white"
                onChange={({ target }) => search(target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile navbar */}
      {isNavOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-white hover:text-yellow-500 text-lg block font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-yellow-500 text-lg block font-medium"
            >
              About Website
            </a>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="text-white hover:text-yellow-500 text-lg block font-medium bg-transparent border-b border-white"
                onChange={({ target }) => search(target.value)}
              />
            </div>
          </div>
        </div>
        // Mobile navbar end
      )}
    </nav>
  );
};

export default Navbar;
