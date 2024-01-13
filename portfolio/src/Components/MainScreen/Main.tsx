import DocumentBoard from '../Documents/DocumentBoard';
import Finder from '../Finder/Finder';
import useWindowPopUp from '../../Hooks/useWindowPopUp';
const Main = () => {
  const { showPopup, title, content, showWindowPopup, hideWindowPopup } = useWindowPopUp();
  return (
    <div className="flex flex-row w-full h-full justify-evenly items-start">
      <div className="flex flex-col w-[70%] h-[85%] justify-center items-end">
        {
          <Finder isOpen={showPopup} title={title}>
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
