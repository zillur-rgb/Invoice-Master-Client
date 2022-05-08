import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navmenu = [
    {
      title: "Features",
      link: "/features",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Testimonilas",
      link: "/testimonials",
    },
  ];

  return (
    <div className="flex items-center justify-between my-15 relative">
      <Link to="/">
        <h1 className="text-textHeader sm:text-title font-bold text-primary">
          Invoice Master
        </h1>
      </Link>

      <nav
        className={`flex-col md:flex-row ${
          showNavbar ? "flex" : "hidden"
        } md:flex md:relative absolute md:w-auto w-full items-center bg-slate-50 md:bg-transparent top-11 md:top-0 py-25 md:py-0`}
      >
        {navmenu.map((nav) => (
          <Link to={nav.link} key={nav.link}>
            <p className="text-text mx-0 md:mx-15 py-10 md:py-0  hover:font-bold">
              {nav.title}
            </p>
          </Link>
        ))}
      </nav>

      <button className="hidden md:flex text-normal px-30 py-15 border-2 border-primary hover:text-white text-primary bg-none hover:bg-primary rounded-full">
        Get Started
      </button>

      <p
        className=" block md:hidden text-title cursor-pointer"
        onClick={() => setShowNavbar(!showNavbar)}
      >
        <HiOutlineMenu />
      </p>
    </div>
  );
};

export default Navbar;
