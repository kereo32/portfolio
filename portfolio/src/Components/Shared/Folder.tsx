import closedFolder from '/images/closedFolder.png';
import openFolder from '/images/openFolder.png';

type FolderProps = {
  title: string;
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  customClickHandler?: (title: string) => void; 
  isOpen: boolean;
  isActiveFolder?: boolean;
};

const Folder = ({ title, clickHandler, customClickHandler, isOpen, isActiveFolder }: FolderProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    
    if (customClickHandler) {
      customClickHandler(title);
    }
    if (clickHandler) {
      clickHandler(e);
    }
  };

  return (
    <div className={`flex flex-col max-h-fit items-center m-6 ${isActiveFolder && 'bg-blue-400'}`}>
      <button id={title} onClick={handleClick}>
        <img src={isOpen && isActiveFolder ? openFolder : closedFolder} alt="folder" className="w-14" />
      </button>
      <p className="text-white text-sm font-thin">{title}</p>
    </div>
  );
};

export default Folder;
