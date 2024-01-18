import { useState } from 'react';
import verticalBar from '/images/verticalBar.png';
import linkedin from '/images/linkedin.png';
import finder from '/images/finder.png';
import github from '/images/github.png';
import gmail from '/images/gmail.png';
import ApplicationIcon from './ApplicationIcon';

const ApplicationBar = ({ isMinimized, isAppOpen, toggleMinimize, showWindowPopup }: { isMinimized?: boolean, isAppOpen?: boolean, toggleMinimize?: () => void, showWindowPopup?: (title: string) => void }) => {
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
        <ApplicationIcon title='Info' isAppOpen={isAppOpen} showWindowPopup={showWindowPopup} isMinimized={isMinimized} toggleMinimize={toggleMinimize} applicationImageUrl={finder} />
        <ApplicationIcon url='https://www.linkedin.com/in/kerem-hac%C4%B1%C5%9Fabano%C4%9Flu' title='Info' size={'w-8'} applicationImageUrl={linkedin} />
        <ApplicationIcon url='https://github.com/kereo32' title='Info' size={'w-8'} applicationImageUrl={github} />
        <ApplicationIcon url='keremhacii@outlook.com' title='Info' size={'w-8'} applicationImageUrl={gmail} />
        <img src={verticalBar} alt="vertical bar" className="w-6 h-[80%] invert opacity-30 cursor-pointer ml-4 mr-2" />
      </div>
    </div>
  );
};

export default ApplicationBar;
