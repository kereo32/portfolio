import leftArrow from '/images/leftArrow.png';
import { SearchComponent } from '../Shared';

type FinderHeaderType = {
  title: string;
  browsingHistory: string[];
  changeTitle: (title: string) => void;
};

const FinderHeader = ({ title, browsingHistory, changeTitle }: FinderHeaderType) => {

  const onArrowClick = () => {
    if (browsingHistory.length > 1 && browsingHistory[browsingHistory.length - 2] !== '') {
      changeTitle(browsingHistory[browsingHistory.length - 2]);
    }

  };
  return (
    <div className="flex flex-row w-full h-[10%] landscape:max-sm:h-[15%] bg-finderBg border-b-[1px] shadow-md border-finderHeaderBg">
      <div className="flex flex-row w-[10%] h-full justify-center items-center portrait:max-sm:w-[15%]">
        <button onClick={onArrowClick}>
          <img src={leftArrow} alt="leftArrow" className="w-4 h-4 mr-2 max-sm:mr-0 invert opacity-80 hover:opacity-100" />
        </button>
        <button onClick={onArrowClick}>
          <img src={leftArrow} alt="right" className="w-4 h-4 rotate-180 invert opacity-80 hover:opacity-100" />
        </button>
      </div>
      <div className="flex flex-row w-[87%] h-full items-center justify-between max-sm:justify-end max-sm:mr-2">
        <p className="text-white font-thin text-sm">{title}</p>
        <SearchComponent changeTitle={changeTitle} />
      </div>
    </div>
  );
};

export default FinderHeader;
