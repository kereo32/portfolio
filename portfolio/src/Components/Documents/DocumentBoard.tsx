import Folder from './Folder';
import Papers from './Papers';
import useToggler from '../../Hooks/useToggler';
import { useState } from 'react';

type DocumentBoardProps = {
  showWindowPopup: (title: string, content: []) => void;
};

const DocumentBoard = ({ showWindowPopup }: DocumentBoardProps) => {
  const [activeFolder, setActiveFolder] = useState('');
  const { isOpen, toggle, setFalse } = useToggler(false);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.detail) {
      case 1:
        setActiveFolder(e.currentTarget.id);
        setFalse();
        break;
      case 2:
        toggle();
        showWindowPopup(activeFolder, []);
        break;
    }
  };
  return (
    <div className="flex flex-col w-full h-[75%] justify-start items-end">
      <div className="flex flex-row w-full h-fit items-center justify-end">
        <Folder isActiveFolder={activeFolder == 'Projects'} clickHandler={handleClick} isOpen={isOpen} title="Projects" />
        <Folder isActiveFolder={activeFolder == 'Personal'} clickHandler={handleClick} isOpen={isOpen} title="Personal" />
      </div>
      <div className="flex flex-col w-full h-fit items-end justify-end">
        <div className="flex flex-col w-ful h-full">
          <Papers title="Documents" />
        </div>
        <div className="flex flex-col w-ful h-full">
          <Papers title="Notes" />
        </div>
      </div>
    </div>
  );
};

export default DocumentBoard;
