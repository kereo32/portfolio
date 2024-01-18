import { useState } from 'react';
import close from '/images/close.png';
import phone from '/images/phone.png';

interface PreviewPopUpHook {
  title: string;
  description: string;
  url: string;
  solution: string;
}

const usePlayablePreviewPopUp = ({ title, description, url, solution }: PreviewPopUpHook) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const Popup = () => (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] h-full bg-black bg-opacity-75 rounded-md z-60">
      <div className="flex flex-col w-full h-full justify-center items-center text-center text-white">
        <div className='flex flex-row w-full h-[10%] justify-end mr-4'>
          <button onClick={closePopup}>
            <img src={close} alt="close" className="w-4 invert m-4" />
          </button>
        </div>
        <div className='flex flex-col w-full h-[80%] landscape:max-sm:w-full landscape:max-sm:h-full justify-start items-center overflow-y-auto overflow-x-hidden'>
          <div className='flex flex-col w-full h-[20%] justify-center items-center space-y-4 ml-6'>
            <h1 className='font-bold'>{title}</h1>
            <h2 className='font-mono' dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} />

          </div>
          <p className="text-xs font-mono mt-10 landscape:hidden">
            *Preview can only be shown in landscape, please change your device direction.
          </p>
          <div className="flex flex-col w-[75%] h-[60%] landscape:max-sm:h-full justify-start items-center relative">
            <img
              src={phone}
              alt="iPhone Background"
              className="w-[95%] h-[95%] landscape:max-sm:h-full  absolute inset-0 portrait:max-sm:hidden"
            />

            <div className="relative w-[78%] h-[71%] mt-4 portrait:max-sm:hidden">
              <iframe
                title="iPhone Screen"
                src={encodeURI(url)}
                className="w-full h-full border-none rounded-3xl"
              ></iframe>
            </div>

          </div>
          <div className='flex flex-col w-[60%] h-[20%] justify-center items-center ml-6 max-sm:hidden'>
            <h1 className='font-bold'>Solution</h1>
            <p className='font-medium z-10' dangerouslySetInnerHTML={{ __html: solution?.replace(/\n/g, '<br />') }} />
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

export default usePlayablePreviewPopUp;
