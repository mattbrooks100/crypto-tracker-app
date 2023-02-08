import { NavLinkProps } from "../../interfaces";

const NavLink = ({ link }: NavLinkProps) => {
  return (
    <li
      key={link.href}
      className="list-none flex justify-center px-4 py-2 cursor-pointer hover:text-secondary duration-500"
    >
      <a href={link.href}>{link.name}</a>
    </li>
  );
};

export default NavLink;
