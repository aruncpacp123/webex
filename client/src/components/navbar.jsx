import React, { useState } from "react";
import logo from "@/assets/logo.jpg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-orange-600">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold logo"><img className='w-24' src={logo} alt="logo"/></div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a href="#home" className="block py-2 px-4 hover:bg-gray-600">Home</a>
          <a href="#about" className="block py-2 px-4 hover:bg-gray-600">About</a>
          <a href="#services" className="block py-2 px-4 hover:bg-gray-600">Services</a>
          <a href="#contact" className="block py-2 px-4 hover:bg-gray-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


/*
<header className=''>
        <nav className='w-full h-14 bg-slate-50 flex justify-between items-center'>
            <div id= "logo" className='ml-3'>
                <img src={logo} alt = "Logo"/>
            </div>
            <div className='block m-5 lg:hidden md:hidden'>
                |||
            </div>
            <div id="list" className='hidden sm:flex justify-between items-center mr-9' >
                <div className='mr-5'> contact</div>
                <div>hidden</div>
                <div>hello</div>
            </div>
        </nav>
    </header>*/