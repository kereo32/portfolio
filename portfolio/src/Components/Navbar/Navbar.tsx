import { useState, useEffect } from 'react';
import NavbarIcon from './NavbarIcon';
import apple from '/images/apple.png';


const TopNavbar = ({ showWindowPopup }: { showWindowPopup: (title: string) => void }) => {

  const [dateTime, setDateTime] = useState(
    new Date().toLocaleString('en-US', { day: 'numeric', month: 'short', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).replace(',', '')
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(
        new Date()
          .toLocaleString('en-US', { day: 'numeric', month: 'short', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false })
          .replace(',', '')
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleNavbarNavigation = (title: string) => {
    showWindowPopup(title);
  }

  return (
    <div className={`flex w-full h-[3.5%] max-sm:landscape:h-[5%] justify-start items-center bg-gradient-to-r from-topBarEasy to-topBarHard via-70% opacity-80`}>
      <div className="flex flex-row w-full">
        <div className="flex flex-row w-[50%] items-center justify-start">
          <NavbarIcon navbarIconUrl={apple} classNames="h-4 invert pl-4 max-sm:hidden" />
          <NavbarIcon navbarIconName="Finder" classNames="text-white font-bold text-sm pl-6 max-sm:pl-4" onClick={() => handleNavbarNavigation('Finder')} />
          <NavbarIcon navbarIconName="Projects" classNames="text-white text-sm pl-6 max-sm:pl-4" onClick={() => handleNavbarNavigation('Projects')} />
          <NavbarIcon navbarIconName="Info" classNames="text-white text-sm pl-6 max-sm:pl-4" onClick={() => handleNavbarNavigation('Info')} />
          <NavbarIcon navbarIconName="Contact" classNames="text-white text-sm pl-6 max-sm:pl-4" onClick={() => handleNavbarNavigation('Contact')} />
        </div>
        <div className="flex flex-col w-[50%] items-end justify-start">
          <NavbarIcon navbarIconName={dateTime} classNames="text-white text-sm pr-4 cursor-default" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
