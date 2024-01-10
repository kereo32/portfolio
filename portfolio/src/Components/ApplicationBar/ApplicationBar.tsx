import { useState } from 'react';
import verticalBar from '/images/verticalBar.png';
import discord from '/images/discord.png';
import finder from '/images/finder.png';
import spotify from '/images/spotify.png';
import safari from '/images/safari.png';
import bin from '/images/bin.png';
import file from '/images/file.png';
import ApplicationIcon from './ApplicationIcon';

const ApplicationBar = () => {
  const [navbarSize, setNavbarSize] = useState({ height: 'h-[8%]', translate: '' });

  const handleMouseEnter = () => {
    setNavbarSize({ height: 'h-[10%]', translate: '-translate-y-4' });
  };

  const handleMouseLeave = () => {
    setNavbarSize({ height: 'h-[8%]', translate: '' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 ${navbarSize.height} ${navbarSize.translate} w-full flex justify-center items-center mb-1 transition-all duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row min-h-max items-center bg-transparent border-[0.01rem] rounded-xl border-gray-400 shadow-2xl">
        <ApplicationIcon applicationImageUrl={finder} />
        <ApplicationIcon size={'w-8'} applicationImageUrl={discord} />
        <ApplicationIcon size={'w-8'} applicationImageUrl={spotify} />
        <ApplicationIcon size={'w-8'} applicationImageUrl={safari} />
        <img src={verticalBar} alt="vertical bar" className="w-2 h-[80%] invert opacity-30 cursor-pointer ml-4" />
        <ApplicationIcon applicationImageUrl={file} />
        <ApplicationIcon applicationImageUrl={bin} />
      </div>
    </div>
  );
};

export default ApplicationBar;
