import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div>
        <nav className="bg-gradient-to-b from-black to-gray-800 text-white shadow-lg fixed w-full z-10">
            <div className="container mx-auto flex justify-between items-center p-4">
              {/* Logo */}
              <div className="text-2xl font-bold">
                <a href="#">Webinar</a>
              </div>

              {/* Hamburger Icon */}
              <div
                className="sm:hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </div>

              {/* Navigation Links */}
              <div
                className={`sm:flex sm:items-center sm:space-x-6 absolute sm:relative top-16 sm:top-auto w-full sm:w-auto left-0 sm:left-auto bg-gray-800 sm:bg-transparent ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/"
                  className="block sm:inline-block py-2 px-4 hover:bg-gray-700 sm:hover:bg-transparent"
                >
                  Home
                </Link>
                <Link
                  to="/events"
                  className="block sm:inline-block py-2 px-4 hover:bg-gray-700 sm:hover:bg-transparent"
                >
                  Events
                </Link>
                <Link
                  to="/about"
                  className="block sm:inline-block py-2 px-4 hover:bg-gray-700 sm:hover:bg-transparent"
                >
                  About US
                </Link>
                <Link
                  to="/contact"
                  className="block sm:inline-block py-2 px-4 hover:bg-gray-700 sm:hover:bg-transparent"
                >
                  Contact
                </Link>
              </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar