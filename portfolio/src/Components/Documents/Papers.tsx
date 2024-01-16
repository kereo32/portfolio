import paper from '/images/paper.png';
import openPaper from '/images/openPaper.png';
import pdf from '/images/pdf.png';
import cv from '/docs/keremHacisabanogluCV.pdf';
import motivation from '/docs/keremHacisabanogluMotivation.pdf';
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
          <div className="flex flex-col w-full h-full justify-center items-center text-center">
            <a href={cv} target='_blank'>
              <img src={pdf} alt="folder" className="w-10" />
              <p className="text-white text-sm font-thin">CV</p>
            </a>
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center text-center">
            <a href={motivation} target='_blank'>
              <img src={pdf} alt="folder" className="w-10" />
              <p className="text-white text-sm font-thin">Cover</p>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Papers;
