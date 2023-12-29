import { useState } from 'react';
import verticalBar from '/images/verticalBar.png';
import discord from '/images/discord.png';
import finder from '/images/finder.png';
import spotify from '/images/spotify.png';
import safari from '/images/safari.png';
import bin from '/images/bin.png';
import file from '/images/file.png';

const Navbar = () => {
  const [navbarSize, setNavbarSize] = useState({ height: 'h-[7%]', translate: '' });

  const handleMouseEnter = () => {
    setNavbarSize({ height: 'h-[9%]', translate: '-translate-y-4' });
  };

  const handleMouseLeave = () => {
    setNavbarSize({ height: 'h-[7%]', translate: '' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 ${navbarSize.height} ${navbarSize.translate} w-full flex justify-center items-center mb-1 transition-all duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row h-full items-center bg-transparent border-[0.01rem] rounded-xl border-gray-400 shadow-2xl">
        <img src={finder} className="w-10 h-[80%] ml-4" />
        <img src={discord} className="w-10 h-[80%] ml-4" />
        <img src={spotify} className="w-10 h-[80%] ml-4" />
        <img src={safari} className="w-10 h-[80%] ml-4" />
        <img src={verticalBar} alt="vertical bar" className="w-2 h-[80%] invert opacity-30 cursor-pointer ml-4" />
        <img src={file} className="w-10 h-[80%] ml-4" />
        <img src={bin} className="w-10 h-[80%] ml-4" />
      </div>
    </div>
  );
};

export default Navbar;
