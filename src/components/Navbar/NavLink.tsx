type LinkProps = {
  name: string,
  href: string
}

type Props = {
  link: LinkProps,
  className?: string,
}

const NavLink = ({ link }: Props) => {
  return (
    <li
      key={link.href}
      className="list-none flex justify-center text-xl px-4 py-2 cursor-pointer hover:text-secondary duration-500"
    >
      <a href={link.href}>{link.name}</a>
    </li>
  );
};

export default NavLink;
