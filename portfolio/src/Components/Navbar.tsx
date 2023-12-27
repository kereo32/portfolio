import verticalBar from '/images/verticalBar.png';
import discord from '/images/discord.png';
import finder from '/images/finder.png';
import spotify from '/images/spotify.png';
import safari from '/images/safari.png';
import bin from '/images/bin.png';
import file from '/images/file.png';
import { useState, useEffect } from 'react';

const Navbar = () => {
  // const [navbarHeight, setNavbarHeight] = useState(70); // Initial height in pixels

  // const handleDrag = (e: React.DragEvent<HTMLImageElement>) => {
  //   e.preventDefault();
  //   setNavbarHeight(window.innerHeight - e.clientY);
  // };

  // useEffect(() => {
  //   console.log(navbarHeight, 'navbarHeight');
  // }, [navbarHeight]);

  return (
    <div className={`fixed bottom-0 left-0 h-[7%] w-full flex justify-center items-center mb-1`}>
      <div className="flex flex-row h-full items-center bg-transparent border-[0.01rem] rounded-xl border-gray-400 shadow-2xl">
        <div className="flex flex-row h-full w-full items-center">
          <img src={finder} className="w-10 h-[80%] ml-4" />
          <img src={discord} className="w-10 h-[80%] ml-4" />
          <img src={spotify} className="w-10 h-[80%] ml-4" />
          <img src={safari} className="w-10 h-[80%] ml-4" />
          <img src={verticalBar} alt="vertical bar" className="w-2 h-[80%] invert opacity-30 cursor-ns-resize ml-4" />
          <img src={file} className="w-10 h-[80%] ml-4" />
          <img src={bin} className="w-10 h-[80%] ml-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
