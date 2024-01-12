import React from 'react';
import info from '/images/info.png';
import contact from '/images/contact.png';
import personal from '/images/personal.png';
import projects from '/images/projects.png';

import WindowShortcutTab from './WindowShortcutTab';

type ApplicationWindowProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
};

const Window = ({ title, children, isOpen }: ApplicationWindowProps) => {
  return (
    <div className={`transition-transform transform ${isOpen ? 'scale-y-100 scale-x-100' : 'scale-y-0 scale-x-0'} flex flex-row w-[70%] h-[80%]`}>
      <div className="flex flex-col w-[15%] h-full bg-finderHeaderBg bg-opacity-90 rounded-l-lg">
        <div className="flex flex-row h-[10%] w-full justify-start items-center">
          <div className="flex flex-row ml-2 h-full w-[40%] justify-between">
            <button>
              <div className="flex ml-1 h-2 w-2 rounded-full bg-red-600" />
            </button>
            <button>
              <div className="flex ml-1 h-2 w-2 rounded-full bg-yellow-400" />
            </button>
            <button>
              <div className="flex ml-1 h-2 w-2 rounded-full bg-green-400" />
            </button>
          </div>
        </div>
        <div className="flex ml-2 flex-col h-[90%] w-full justify-start items-start">
          <p className="text-white text-xs font-thin -mt-2 opacity-75">Favorites</p>
          <div className="flex flex-col w-full h-[40%] mt-3 text-white text-sm space-y-2">
            <WindowShortcutTab title="Projects" imageUrl={projects} />
            <WindowShortcutTab title="Personal" imageUrl={personal} />
            <WindowShortcutTab title="Contact" imageUrl={contact} />
            <WindowShortcutTab title="Info" imageUrl={info} />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[90%]">
        <div className="flex flex-row w-full h-[10%] bg-finderBg border-b-[1px] shadow-md border-finderHeaderBg">{title}</div>
        <div className="flex flex-row w-full h-[90%] bg-finderBg">{children}</div>
      </div>
    </div>
  );
};

export default Window;
