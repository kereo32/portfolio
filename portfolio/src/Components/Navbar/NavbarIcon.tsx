type NavbarIconProps = {
  navbarIconUrl?: string;
  classNames?: string;
  navbarIconName?: string;
};

const NavbarIcon = ({ navbarIconName, navbarIconUrl, classNames }: NavbarIconProps) => {
  return <>{navbarIconUrl ? <img src={navbarIconUrl} className={classNames} /> : <p className={classNames}>{navbarIconName}</p>}</>;
};

export default NavbarIcon;
