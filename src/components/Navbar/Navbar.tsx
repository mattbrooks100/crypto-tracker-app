import Logo from "../../assets/btc_cat_logo.png";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import navLinks from "./navLinks";
import NavLink from "./NavLink";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar justify-center w-full">
      <div className="navbar-container relative flex justify-between items-center w-full max-w-screen-xl py-2">
        {/* Navbar Logo */}
        <div className="logo flex gap-2 pl-4 text-4xl items-center">
          <img src={Logo} alt="Crypto Cat Logo" className="w-14" />
          <h1>
            Crypto<span className="text-secondary">Cat</span>
          </h1>
        </div>

        {/* Navbar Links (full-width) */}
        <div className="full-menu text-xl sm:flex hidden">
          {navLinks.map((link, i) => (
            <NavLink key={i} link={link} />
          ))}
        </div>

        {/* Hamburger button for smaller screens */}
        <div className="hamburger-menu pr-4 sm:hidden">
          <button
            className="rounded-full p-2 hover:text-secondary duration-500"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <IoMdClose size={40} /> : <HiMenu size={40} />}
          </button>
        </div>
      </div>

      {/* Mobile menu with navbar links (smaller screens) */}
      {toggle && (
        <div className="mobile-menu flex flex-col text-4xl top-[76px] justify-center gap-16 z-99 h-[500px] w-screen bg-black sm:hidden">
            {/* animate-[growDown_0.3s_ease_forwards] */}
            {/* h-[calc(100vh-76px)] */}
          {navLinks.map((link, i) => (
            <NavLink key={i} link={link} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
