import closedFolder from '/images/closedFolder.png';
import openFolder from '/images/openFolder.png';
import useToggler from '../../Hooks/useToggler';

type FolderProps = {
  title: string;
};

const Folder = ({ title }: FolderProps) => {
  const { isOpen, toggle } = useToggler(false);
  return (
    <div className="flex flex-col max-h-fit items-center m-6">
      <img src={isOpen ? openFolder : closedFolder} alt="folder" className="w-14" onClick={() => toggle()} />
      <p className="text-white text-sm font-thin">{title}</p>
    </div>
  );
};

export default Folder;
