import info from '/images/info.png';
import contact from '/images/contact.png';
import personal from '/images/personal.png';
import projects from '/images/projects.png';

import FinderShortcutTab from './FinderShortcutTab';

type FinderSideBarProps = {
  title: string;
  changeTitle: (title: string) => void;
  hideWindowPopup: () => void;
  toggleFullScreen: () => void;
  toggleMinimized: () => void;
};

const FinderSideBar = ({ title, changeTitle, hideWindowPopup, toggleFullScreen, toggleMinimized }: FinderSideBarProps) => {

  return (
    <>
      <div className="flex flex-col w-[20%] landscape:max-sm:w-[10%]  h-full bg-finderHeaderBg bg-opacity-90 rounded-l-lg">
        <div className="flex flex-row h-[10%] w-full justify-start items-center">
          <div className="flex flex-row ml-2 h-full w-[40%] justify-between">
            <button onClick={hideWindowPopup}>
              <div className="flex ml-1 h-2 w-2 rounded-full bg-red-600 hover:bg-red-500" />
            </button>
            <button onClick={toggleMinimized}>
              <div className="flex ml-1 h-2 w-2 rounded-full bg-yellow-400 hover:bg-yellow-300" />
            </button>
            <button onClick={toggleFullScreen}>
              <div className="flex ml-1 h-2 w-2 rounded-full bg-green-400 hover:bg-green-300" />
            </button>
          </div>
        </div>
        <div className="flex ml-2 max-sm:ml-0 max-sm:min-w-max flex-col h-[90%] w-full justify-start items-start">
          <p className="text-white text-xs font-thin -mt-2 opacity-75">Favorites</p>
          <div className="flex flex-col min-w-fit h-[40%] mt-3 text-white text-sm space-y-2">
            <FinderShortcutTab handleActive={() => changeTitle('Info')} isActive={title === 'Info'} title="Info" imageUrl={info} />
            <FinderShortcutTab handleActive={() => changeTitle('Projects')} isActive={title === 'Projects'} title="Projects" imageUrl={projects} />
            <FinderShortcutTab handleActive={() => changeTitle('Personal')} isActive={title === 'Personal'} title="Personal" imageUrl={personal} />
            <FinderShortcutTab handleActive={() => changeTitle('Contact')} isActive={title === 'Contact'} title="Contact" imageUrl={contact} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FinderSideBar;
