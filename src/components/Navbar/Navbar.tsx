import Logo from "../../assets/btc_cat_logo.png";
import links from "./links";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import NavLink from "./NavLink";

// const linksList = () => {
//   return links.map((link) => (
//     <li
//       key={link.href}
//       className="link list-none text-xl px-4 py-2 cursor-pointer hover:text-secondary duration-500"
//     >
//       <a href={link.href}>{link.name}</a>
//     </li>
//   ));
// };

const Navbar: React.FC<{}> = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar flex justify-center w-full">
      <div className="navbar-container relative flex justify-between items-center w-full max-w-screen-xl px-4 py-2">
        {/* Navbar Logo */}
        <div className="logo flex gap-2 text-4xl items-center">
          <img src={Logo} alt="Crypto Cat Logo" className="w-14" />
          <h1>
            Crypto<span className="text-secondary">Cat</span>
          </h1>
        </div>

        {/* Navbar Links (expanded) */}
        <div className="sm:flex hidden">
          {links.map((link) => (
            <NavLink link={link} />
          ))}
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="hamburger-menu sm:hidden">
          <button
            className="rounded-full p-2 hover:text-secondary duration-500"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <IoMdClose size={40} /> : <HiMenu size={40} />}
          </button>
        </div>

        {/* Links dropdown from hamburger menu */}
        {toggle && (
          <div className="links-dropdown absolute grid justify-center right-4 -bottom-96 bg-gray-700 w-60 h-96 rounded-xl transition-transform">
            {links.map((link) => (
              <NavLink link={link} className="links sm:flex hidden" />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
