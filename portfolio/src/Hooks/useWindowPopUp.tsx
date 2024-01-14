/* eslint-disable @typescript-eslint/no-explicit-any */
/* TODO : Change Any type on content*/
import { useState, useEffect } from 'react';
import { InfoStaticContent,ProjectsStaticContent } from '../Constants/FinderContent';
import {BasicNote,ProjectPreview} from '../Components/Shared';

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
    switch (title) {
      case 'Info':
        setContent(
          InfoStaticContent.map((item) => (
            <BasicNote name={item.name}  title={item.title} content={item.content} />
          ))
        );
        break;
      case 'Projects':
        setContent(
          ProjectsStaticContent.map((item) => (
            <ProjectPreview title={item.title}  description={item.description} url={item.url} />
          ))
        );
        break;
      default:
        setContent([]);
        break;
    }
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
