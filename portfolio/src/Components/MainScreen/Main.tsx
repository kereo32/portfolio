import DocumentBoard from '../Documents/DocumentBoard';
import Finder from '../Finder/Finder';

type MainProps = {
  showPopup: boolean;
  title: string;
  content: React.ReactNode;
  browsingHistory: string[];
  isMinimized: boolean;
  isFullScreen: boolean;
  showWindowPopup: (title: string) => void;
  hideWindowPopup: () => void;
  changeTitle: (title: string) => void;
  toggleFullScreen: () => void;
  toggleMinimized: () => void;
};

const Main = ({ showPopup, title, content, browsingHistory, isMinimized, isFullScreen, showWindowPopup, hideWindowPopup, changeTitle, toggleFullScreen, toggleMinimized }: MainProps) => {
  return (
    <div className="flex flex-row w-full h-full justify-evenly items-start">
      <div className="flex flex-col w-[70%] h-[85%] justify-center items-end">
        {
          <Finder isMinimized={isMinimized} toggleMinimized={toggleMinimized} isFullScreen={isFullScreen} toggleFullScreen={toggleFullScreen} hideWindowPopup={hideWindowPopup} browsingHistory={browsingHistory} changeTitle={changeTitle} isOpen={showPopup} title={title}>
            {content}
          </Finder>
        }
      </div>
      <div className="flex flex-col w-[33%] h-full justify-center">
        <DocumentBoard hideWindowPopup={hideWindowPopup} showWindowPopup={showWindowPopup} />
      </div>
    </div>
  );
};

export default Main;
