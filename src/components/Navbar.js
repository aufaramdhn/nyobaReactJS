import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICE", link: "/service" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-10 w-full shadow-md">
      <div className="items-center justify-between px-10 py-4 bg-gray-900 md:flex md:px-10 lg:px-32">
        <div className="flex items-center text-2xl font-bold cursor-pointer dark:text-white">
          <span className="pt-2 mr-1 text-3xl dark:text-blue-700">
            <i className="ri-aliens-fill" />
          </span>
          AlienJomRide
        </div>

        <div onClick={() => setOpen(!open)} className="absolute text-3xl text-gray-400 cursor-pointer right-8 top-6 md:hidden">
          <i className={open ? "ri-close-line" : "ri-menu-line"} />
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 " : "top-[-490px]"}`}>
          {Links.map((link) => (
            <li key={link.name} className="text-xl font-semibold md:ml-8 md:my-0 my-7">
              <a href={link.link} className="text-white duration-500 hover:text-gray-400">
                {link.name}
              </a>
            </li>
          ))}
          <Link to="/contact">
            <button type="button" className="px-2 py-2 ml-6 mr-4 text-lg font-medium text-center text-white duration-200 delay-100 rounded-sm hover:text-gray-900 bg outline outline-slate-100 hover:bg-slate-100 md:mr-0">
              Get started
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
