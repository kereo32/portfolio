import closedFolder from '/images/closedFolder.png';
import openFolder from '/images/openFolder.png';

type FolderProps = {
  title: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  isActiveFolder?: boolean;
};

const Folder = ({ title, clickHandler, isOpen, isActiveFolder }: FolderProps) => {
  return (
    <div className={`flex flex-col max-h-fit items-center m-6 ${isActiveFolder && 'bg-blue-400'}`}>
      <button id={title} onClick={(e: React.MouseEvent<HTMLButtonElement>) => clickHandler(e)}>
        <img src={isOpen && isActiveFolder ? openFolder : closedFolder} alt="folder" className="w-14" />
      </button>
      <p className="text-white text-sm font-thin">{title}</p>
    </div>
  );
};

export default Folder;
