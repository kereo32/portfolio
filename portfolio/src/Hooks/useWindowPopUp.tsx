/* eslint-disable @typescript-eslint/no-explicit-any */
/* TODO : Change Any type on content*/
import { useState } from 'react';

interface WindowPopUpHook {
  showPopup: boolean;
  title: string;
  content: any[];
  showWindowPopup: (title: string, content: []) => void;
  hideWindowPopup: () => void;
}

const useWindowPopUp = (): WindowPopUpHook => {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState([]);

  const showWindowPopup = (title: string, content: []) => {
    setTitle(title);
    setContent(content);
    setShowPopup(true);
  };

  const hideWindowPopup = () => {
    setShowPopup(false);
  };

  return { showPopup, title, content, showWindowPopup, hideWindowPopup };
};

export default useWindowPopUp;
