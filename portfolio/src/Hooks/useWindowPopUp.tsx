/* eslint-disable @typescript-eslint/no-explicit-any */
/* TODO : Change Any type on content*/
import { useState, useEffect } from 'react';
import { generateContent } from '../Helpers/Util';

interface WindowPopUpHook {
  showPopup: boolean;
  title: string;
  content: JSX.Element[];
  browsingHistory: string[];
  showWindowPopup: (title: string) => void;
  changeTitle: (title: string) => void;
  hideWindowPopup: () => void;
}

const useWindowPopUp = (): WindowPopUpHook => {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState<JSX.Element[]>([]);
  const [browsingHistory, setBrowsingHistory] = useState<string[]>([]);

  useEffect(() => {
    setContent(generateContent(title, changeTitle))
    setBrowsingHistory([...browsingHistory, title]);
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

  return { showPopup, title, content, browsingHistory, changeTitle, showWindowPopup, hideWindowPopup };
};

export default useWindowPopUp;
