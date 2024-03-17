import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Correctly update the state
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-jobs", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a job" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
      <nav className="flex justify-between items-center py-4">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle cx="12.0143" cy="12.5413" r="12.0143" fill="#3575E2" />
            <circle cx="16.9587" cy="17.4857" r="12.0143" fill="#3575E2" />
          </svg>
          <span>JobPortal</span>
        </a>

        {/* Nav items for large devices */}

        <ul className="hidden md:flex gap-12 ">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                activeClassName="active" // Add activeClassName for styling active link
                className="text-base text-primary" // Add className for styling
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* sing up and login */}

        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">
            Login in
          </Link>
          <Link
            to="/sign-up"
            className="py-3 px-4 border rounded bg-blue text-white"
          >
            Sign up
          </Link>
        </div>

        {/* mobile menu */}
        <div className="md:hidden block ">
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* navitems for mobile  */}

      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white first:text-white">
              <NavLink
                to={path}
                activeClassName="active" // Add activeClassName for styling active link
              >
                {title}
              </NavLink>
            </li>
          ))}

          <li className="text-white py-1">
            <Link to="/login" className="">
              Login in
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
