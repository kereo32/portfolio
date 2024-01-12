import { useState } from 'react';
import search from '/images/search.png';
import leftArrow from '/images/leftArrow.png';

const SearchComponent = () => {
  const [isExpanded, setExpanded] = useState(true);

  const handleIconClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <div className={`flex flex-row w-fit items-center`}>
        <div className={`flex flex-row h-full w-full transition-transform transform ${isExpanded ? 'scale-x-100' : 'scale-x-0'} items-center`}>
          <img alt="leftArrow" src={leftArrow} className="w-4 h-4 invert cursor-pointer rotate-180 mr-2" onClick={handleIconClick} />
          <input type="text" placeholder="Search..." className="border rounded px-2 py-1 focus:outline-none focus:border-blue-500" />
        </div>
        <div className={`flex flex-row h-full w-full transition-transform transform ${isExpanded ? 'scale-x-0' : 'scale-x-100'}`}>
          <img onClick={handleIconClick} alt="search icon" src={search} className="w-4 h-4 invert" />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
