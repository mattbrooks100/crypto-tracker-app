import Logo from "../../assets/btc_cat_logo.png";
import links from "./links";

const Navbar: React.FC<{}> = () => {
  return (
    <nav className="navbar flex justify-center w-full bg-gray-600">
      <div className="navbar-container flex justify-between items-center w-full max-w-screen-xl px-4 py-2">
        <div className="logo flex gap-2 text-4xl items-center">
          <img src={Logo} alt="Crypto Cat Logo" className="w-14" />
          <h1>
            Crypto<span className="text-secondary">Cat</span>
          </h1>
        </div>
        <ul className="links flex text-xl">
          {links.map((link) => (
            <li key={link.href} className="px-6 py-4 cursor-pointer hover:text-secondary">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
