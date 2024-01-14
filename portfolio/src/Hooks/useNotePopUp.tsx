import { useState } from 'react';
import close from '/images/close.png';

interface NotePopUpHook {
  title: string;
  content: string;
}

const useNotePopUp = ({ title, content }: NotePopUpHook) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    console.log("??")
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const Popup = () => (
    <div className="absolute w-[40%] h-[40%] z-40 bg-white rounded-md">
      <div className="flex flex-col w-full h-full justify-center items-center text-center">
        <div className='flex flex-row w-full h-[10%] justify-end mr-4'>
        <button onClick={closePopup}>
          <img src={close} alt="close" className="w-4" />
        </button>
        </div>
        <div className='flex flex-col w-full h-[80%]'>
        <h2 className=' font-bold'>{title}</h2>
        <p>{content}</p>
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
