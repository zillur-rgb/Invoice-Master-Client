import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [user] = useAuthState(auth);
  console.log(user);
  const navigate = useNavigate();
  const navmenu = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Features",
      link: "/features",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Testimonials",
      link: "/testimonials",
    },
    {
      title: "My Invoices",
      link: "/myinvoices",
    },
  ];

  return (
    <div className="container mx-auto w-screen ">
      <div className="w-full md:w-5/6 mx-auto flex items-center justify-between my-15 relative">
        <Link to="/">
          <h1 className="text-textHeader lg:text-title font-bold text-primary">
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

        {user ? (
          <div>
            <p>Hello {user?.displayName}</p>
            <button
              className="hover:text-red"
              onClick={() => {
                signOut(auth);
                toast("Signed Out Succesfully.");
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/signin")}
            className=" active:translate-y-1 active:duration-100 active:transition-all  whitespace-nowrap hidden md:flex text-normal px-30 py-15 border-2 border-primary hover:text-white text-primary bg-none hover:bg-primary rounded-full"
          >
            Get Started
          </button>
        )}

        <p
          className=" block md:hidden text-title cursor-pointer"
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <HiOutlineMenu />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
