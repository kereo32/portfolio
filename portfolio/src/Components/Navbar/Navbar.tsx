import NavbarIcon from './NavbarIcon';
import apple from '/images/apple.png';
import { useState, useEffect } from 'react';
const TopNavbar = () => {
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

  return (
    <div className={`fixed top-0 left-0 w-full h-[3.5%] flex justify-start items-center bg-gradient-to-r from-topBarEasy to-topBarHard via-70% opacity-80`}>
      <div className="flex flex-row w-full">
        <div className="flex flex-row w-[50%] items-center justify-start">
          <NavbarIcon navbarIconUrl={apple} classNames="h-4 invert pl-4" />
          <NavbarIcon navbarIconName="Finder" classNames="text-white font-bold text-sm pl-6" />
          <NavbarIcon navbarIconName="File" classNames="text-white text-sm pl-6" />
          <NavbarIcon navbarIconName="Edit" classNames="text-white text-sm pl-6" />
          <NavbarIcon navbarIconName="Help" classNames="text-white text-sm pl-6" />
        </div>
        <div className="flex flex-col w-[50%] items-end justify-start">
          <NavbarIcon navbarIconName={dateTime} classNames="text-white text-sm pr-4" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
