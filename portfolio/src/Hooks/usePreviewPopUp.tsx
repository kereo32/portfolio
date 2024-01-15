import { useState } from 'react';
import close from '/images/close.png';

interface WebPreviewPopUpHook {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  techStack: string;
}

const usePreviewPopUp = ({ title, description, liveUrl, githubUrl, techStack }: WebPreviewPopUpHook) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const Popup = () => (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] h-full bg-black bg-opacity-75 rounded-md z-60">
      <div className="flex flex-col w-full h-full justify-center items-center text-center text-white mt-10">
        <div className='flex flex-row w-full h-[10%] justify-end mr-4'>
          <button onClick={closePopup}>
            <img src={close} alt="close" className="w-4 invert m-4" />
          </button>
        </div>
        <div className='flex flex-col w-full h-[80%] justify-start items-center overflow-y-auto'>
          <div className='flex flex-col w-[70%] h-[30%] justify-center items-center space-y-4 ml-6'>
            <h1 className='font-bold'>{title}</h1>
            <h2 className='font-mono' dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} />
          </div>
          <div className='flex flex-row w-[40%] h-[20%] justify-evenly items-center space-x-2 mt-2'>
            <a href={liveUrl} target='_blank' rel='noreferrer'>
              <button disabled={!liveUrl} className={`border-2 w-20 rounded-md border-finderHeaderBg h-10  ${!liveUrl ? 'opacity-40' : 'border-opacity-70 hover:border-opacity-100'}`}>Test it!</button>
            </a>
            <a href={githubUrl} target='_blank' rel='noreferrer'>
              <button className='border-2 w-20 rounded-md border-finderHeaderBg h-10 border-opacity-70 hover:border-opacity-100'>Check it!</button>
            </a>
          </div>
          <div className='flex flex-col w-[60%] h-[20%] justify-center items-center ml-6'>
            <p className='font-medium z-10' dangerouslySetInnerHTML={{ __html: techStack?.replace(/\n/g, '<br />') }} />
          </div>
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

export default usePreviewPopUp;
