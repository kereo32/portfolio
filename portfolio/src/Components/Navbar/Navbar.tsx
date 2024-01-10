import React, { useState, useEffect } from 'react';
import NavbarIcon from './NavbarIcon';
import apple from '/images/apple.png';
import usePopup from '../../Hooks/usePopup';
import NavbarPopUp from './NavbarPopUp';

const TopNavbar: React.FC = () => {
  const [dateTime, setDateTime] = useState(
    new Date().toLocaleString('en-US', { day: 'numeric', month: 'short', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).replace(',', '')
  );

  const { showPopup, popupPosition, activeNavbarIcon, show, hide } = usePopup();

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
    <div className={`flex w-full h-[3.5%] justify-start items-center bg-gradient-to-r from-topBarEasy to-topBarHard via-70% opacity-80`}>
      <div className="flex flex-row w-full">
        <div className="flex flex-row w-[50%] items-center justify-start">
          <NavbarIcon navbarIconUrl={apple} classNames="h-4 invert pl-4" onClick={(event) => show('Apple', event)} />
          <NavbarIcon navbarIconName="Finder" classNames="text-white font-bold text-sm pl-6" onClick={(event) => show('Finder', event)} />
          <NavbarIcon navbarIconName="Projects" classNames="text-white text-sm pl-6" onClick={(event) => show('Projects', event)} />
          <NavbarIcon navbarIconName="Info" classNames="text-white text-sm pl-6" onClick={(event) => show('Info', event)} />
          <NavbarIcon navbarIconName="Contact" classNames="text-white text-sm pl-6" onClick={(event) => show('Contact', event)} />
        </div>
        <div className="flex flex-col w-[50%] items-end justify-start">
          <NavbarIcon navbarIconName={dateTime} classNames="text-white text-sm pr-4 cursor-default" />
        </div>
      </div>

      {showPopup && (
        <NavbarPopUp position={popupPosition} onClose={hide}>
          {activeNavbarIcon && <div>{activeNavbarIcon} Popup Content</div>}
        </NavbarPopUp>
      )}
    </div>
  );
};

export default TopNavbar;
