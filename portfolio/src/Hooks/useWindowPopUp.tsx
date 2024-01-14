/* eslint-disable @typescript-eslint/no-explicit-any */
/* TODO : Change Any type on content*/
import { useState, useEffect } from 'react';
import {generateContent} from '../Helpers/Util';

interface WindowPopUpHook {
  showPopup: boolean;
  title: string;
  content: JSX.Element[];
  showWindowPopup: (title: string) => void;
  changeTitle: (title: string) => void;
  hideWindowPopup: () => void;
}

const useWindowPopUp = (): WindowPopUpHook => {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setContent(generateContent(title,changeTitle))
  }, [title]);

  const showWindowPopup = (title: string) => {
    setTitle(title);
    setShowPopup(true);
  };

  const changeTitle = (title: string) => {
    setTitle(title);
  }
  const hideWindowPopup = () => {
    setShowPopup(false);
  };

  return { showPopup, title, content,changeTitle, showWindowPopup, hideWindowPopup };
};

export default useWindowPopUp;
