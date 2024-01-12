import leftArrow from '/images/leftArrow.png';
import SearchComponent from '../Shared/SearchComponent';

type WindowHeaderType = {
  title: string;
};
const WindowHeader = ({ title }: WindowHeaderType) => {
  return (
    <div className="flex flex-row w-full h-[10%] bg-finderBg border-b-[1px] shadow-md border-finderHeaderBg">
      <div className="flex flex-row w-[10%] h-full justify-center items-center">
        <button>
          <img src={leftArrow} alt="leftArrow" className="w-4 h-4 mr-2 invert opacity-80 hover:opacity-100" />
        </button>
        <button>
          <img src={leftArrow} alt="leftArrow" className="w-4 h-4 rotate-180 invert opacity-80 hover:opacity-100" />
        </button>
      </div>
      <div className="flex flex-row w-[87%] h-full items-center justify-between">
        <p className="text-white font-thin text-sm">{title}</p>
        <SearchComponent />
      </div>
    </div>
  );
};

export default WindowHeader;
