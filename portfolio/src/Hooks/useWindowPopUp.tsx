/* eslint-disable @typescript-eslint/no-explicit-any */
/* TODO : Change Any type on content*/
import { useState, useEffect } from 'react';
import { generateContent } from '../Helpers/Util';

interface WindowPopUpHook {
  showPopup: boolean;
  title: string;
  content: JSX.Element[];
  browsingHistory: string[];
  isFullScreen: boolean;
  isMinimized: boolean;
  showWindowPopup: (title: string) => void;
  changeTitle: (title: string) => void;
  hideWindowPopup: () => void;
  toggleFullScreen: () => void;
  toggleMinimized: () => void;
}

const useWindowPopUp = (): WindowPopUpHook => {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState<JSX.Element[]>([]);
  const [browsingHistory, setBrowsingHistory] = useState<string[]>([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    setContent(generateContent(title, changeTitle))
    setBrowsingHistory([...browsingHistory, title]);
  }, [title]);

  const showWindowPopup = (title: string) => {
    setTitle(title);
    setShowPopup(true);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  }

  const toggleMinimized = () => {
    console.log("???")
    setIsMinimized(!isMinimized);
    console.log(isMinimized)
  }

  const changeTitle = (title: string) => {
    setTitle(title);
  }
  const hideWindowPopup = () => {
    setShowPopup(false);
  };

  return { showPopup, title, content, browsingHistory, isFullScreen, isMinimized, changeTitle, showWindowPopup, hideWindowPopup, toggleFullScreen, toggleMinimized };
};

export default useWindowPopUp;
