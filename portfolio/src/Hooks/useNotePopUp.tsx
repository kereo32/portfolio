import { useState } from 'react';
import close from '/images/close.png';

interface NotePopUpHook {
  title: string;
  content: string;
}

const useNotePopUp = ({ title, content }: NotePopUpHook) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const Popup = () => (
    <div className={`absolute w-[70%] min-h-fit z-40 top-8 left-10 bg-black bg-opacity-75 rounded-md max-sm:h-full max-sm:overflow-y-auto  max-sm:w-full max-sm:left-0 max-sm:top-0`}>
      <div className="flex flex-col w-full h-full justify-center items-center text-center text-white">
        <div className='flex flex-row w-full h-[10%] justify-end mr-4'>
          <button onClick={closePopup}>
            <img src={close} alt="close" className="w-4 invert m-4" />
          </button>
        </div>
        <div className='flex flex-col w-full h-[80%]'>
          <h2 className=' font-bold'>{title}</h2>
          <p className='m-4' dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
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

export default useNotePopUp;
