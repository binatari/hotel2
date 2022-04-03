import Link from "next/link";
import React from "react";

const Nav = ({ show, handleShow }) => {
  return (
    <nav className="justify-between flex items-center py-4 px-12 container mx-auto">
      <Link href={"/"}>
        <img
          src={require("../public/assets/Alphamsa Logo.png").default.src}
          alt=""
          className="max-h-[4rem] h-[4rem] cursor-pointer"
        />
      </Link>
      <ul className=" hidden md:flex ">
        <Link href="/">
          <a
            className=" px-6 py-2 hover:text-[#AC8B12]"
          >
            Home
          </a>
        </Link>
        <Link href="/apartments">
          <a className=" px-6 py-2 hover:text-[#AC8B12]">Our Apartments</a>
        </Link>
        <Link href="/about">
          <a className=" px-6 py-2 hover:text-[#AC8B12]">About Us</a>
        </Link>
        <li className="bg-black px-6 py-2 text-white">
          <a href="https://api.whatsapp.com/send?phone=%2B2348037181261&text&app_absent=0">
            <button className="bg-black hover:text-[#AC8B12]">Book Now</button>
          </a>
        </li>
      </ul>
      <button
        className={`w-10 h-12 py-1 md:hidden ${show && "opened mt-5"}`}
        onClick={() => handleShow(!show)}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <path
            class="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path class="line line2" d="M 20,50 H 80" />
          <path
            class="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Nav;
