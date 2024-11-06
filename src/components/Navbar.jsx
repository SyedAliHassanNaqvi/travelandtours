import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/slogo.png";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const DropdownLinks = [
  { name: "Our Services", link: "/#services" },
  { name: "Top Brands", link: "/#mobile_brands" },
  { name: "Location", link: "/#location" },
];

const NavBar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-[99999]">
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container py-[2px] sm:block hidden ">
            <div className="flex justify-center items-center font-bold py-[2px]">
              <p>Mobile No. +92 3060227551</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img className="h-16 mt-4" src={logoImage} alt="logo" />
              </Link>
              <div className="flex items-center font-bold text-xl bg-gradient-to-r  from-[#4169e1] to-secondary text-transparent bg-clip-text">
                SYED
              </div>
              <div className="flex items-center font-serif pl-2 mt-1 text-sm bg-gradient-to-r  from-[#4169e1] to-secondary text-transparent bg-clip-text">
                Travel & Tours
              </div>
            </div>

            {/* Nav Links Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/blogs"
                    onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/places"
                    onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/about"
                    onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    About
                  </NavLink>
                </li>
                {/* Dropdown Section */}
                <li className="inline-block py-4 relative group cursor-pointer">
                  <div className="dropdown group flex items-center">
                    <span>Quick Links</span>
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className="absolute -left-9 z-[9999] top-[57px] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                    <ul>
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Book Now Button and Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleOrderPopup(true)}
                className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full"
              >
                Book Now
              </button>
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  );
};

export default NavBar;
