import paper from '/images/paper.png';
import openPaper from '/images/openPaper.png';
import useToggler from '../../Hooks/useToggler';

type PaperProps = {
  title: string;
};

const Papers = ({ title }: PaperProps) => {
  const { isOpen, toggle } = useToggler(false);
  return (
    <div className="flex flex-col max-h-fit items-center m-3 ">
      <img src={isOpen ? openPaper : paper} alt="folder" className=" w-20" onClick={() => toggle()} />
      <p className="text-white text-sm font-thin">{title}</p>
      {isOpen && (
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div className="flex flex-col w-full h-full justify-center items-center">
            <p className="text-white text-sm font-thin">Document 1</p>
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center">
            <p className="text-white text-sm font-thin">Document 2</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Papers;
