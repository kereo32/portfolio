type NavbarIconProps = {
  navbarIconUrl?: string;
  classNames?: string;
  navbarIconName?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const NavbarIcon = ({ navbarIconName, navbarIconUrl, classNames, onClick }: NavbarIconProps) => {
  return (
    <button onClick={onClick}>{navbarIconUrl ? <img src={navbarIconUrl} className={classNames} /> : <p className={classNames}>{navbarIconName}</p>}</button>
  );
};

export default NavbarIcon;
