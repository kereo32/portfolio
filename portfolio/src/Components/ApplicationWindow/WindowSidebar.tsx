import info from '/images/info.png';
import contact from '/images/contact.png';
import personal from '/images/personal.png';
import projects from '/images/projects.png';

import WindowShortcutTab from './WindowShortcutTab';

const WindowSidebar = () => {
  return (
    <>
      <div className="flex flex-col w-[15%] h-full bg-finderHeaderBg bg-opacity-90 rounded-l-lg">
        <div className="flex flex-row h-[10%] w-full justify-start items-center">
          <div className="flex flex-row ml-2 h-full w-[40%] justify-between">
            <button>
              <div className="flex ml-1 h-2 w-2 rounded-full bg-red-600 hover:bg-red-500" />
            </button>
            <button>
              <div className="flex ml-1 h-2 w-2 rounded-full bg-yellow-400 hover:bg-yellow-300" />
            </button>
            <button>
              <div className="flex ml-1 h-2 w-2 rounded-full bg-green-400 hover:bg-green-300" />
            </button>
          </div>
        </div>
        <div className="flex ml-2 flex-col h-[90%] w-full justify-start items-start">
          <p className="text-white text-xs font-thin -mt-2 opacity-75">Favorites</p>
          <div className="flex flex-col w-full h-[40%] mt-3 text-white text-sm space-y-2">
            <WindowShortcutTab title="Info" imageUrl={info} />
            <WindowShortcutTab title="Projects" imageUrl={projects} />
            <WindowShortcutTab title="Personal" imageUrl={personal} />
            <WindowShortcutTab title="Contact" imageUrl={contact} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WindowSidebar;
