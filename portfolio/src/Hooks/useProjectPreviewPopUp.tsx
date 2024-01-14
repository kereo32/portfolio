import { useState } from 'react';
import close from '/images/close.png';

interface ProjectPreviewHook {
  title: string;
  description: string;
  url: string;
}

const useProjectPreviewPopUp = ({ title, description,url }: ProjectPreviewHook) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const Popup = () => (
    <div className={`absolute w-[80%] h-[80%] z-60 bg-black bg-opacity-75 rounded-md`}>
      <div className="flex flex-col w-full h-full justify-center items-center text-center text-white">
        <div className='flex flex-row w-full h-[10%] justify-end mr-4'>
        <button onClick={closePopup}>
          <img src={close} alt="close" className="w-4 invert m-4" />
        </button>
        </div>
        <div className='flex flex-col w-full h-[80%] justify-center items-center'>
        <h2 className=' font-bold'>{title}</h2>
        <p className='m-4' dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} />
        <iframe src={encodeURI(url)} className='w-full h-full' />
        </div>
      </div>
    </div>
  );

  return {
    openPopup,
    closePopup,
    isPopupOpen,
    Popup,
  };
};

export default useProjectPreviewPopUp;
