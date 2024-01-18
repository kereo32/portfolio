import React from 'react';
import FinderSideBar from './FinderSideBar';
import FinderContentArea from './FinderContentArea';

type FinderProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  browsingHistory: string[];
  isFullScreen: boolean;
  isMinimized: boolean;
  toggleMinimized: () => void;
  toggleFullScreen: () => void;
  changeTitle: (title: string) => void;
  hideWindowPopup: () => void;
};

const Finder = ({ title, children, isOpen, browsingHistory, isFullScreen, isMinimized, toggleMinimized, toggleFullScreen, changeTitle, hideWindowPopup }: FinderProps) => {
  return (
    <div className={`transition-all transform duration-500 ease-in-out  ${isOpen ? 'scale-y-100 scale-x-100' : 'scale-y-0 scale-x-0'} ${isMinimized ? 'translate-y-full' : 'translate-y-0'} ${isMinimized ? 'opacity-0' : 'opacity-100'}  ${isFullScreen ? 'min-w-[80%] h-[90%]' : 'min-w-[70%] h-[80%]'} max-sm:w-[90%]  max-sm:h-[80%] flex flex-row `}>
      <FinderSideBar toggleMinimized={toggleMinimized} toggleFullScreen={toggleFullScreen} hideWindowPopup={hideWindowPopup} changeTitle={changeTitle} title={title} />
      <FinderContentArea browsingHistory={browsingHistory} changeTitle={changeTitle} title={title} children={children} />
    </div>
  );
};

export default Finder;
