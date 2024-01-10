import { useState, useRef } from 'react';

interface PopupHook {
  showPopup: boolean;
  popupPosition: { top: number; left: number };
  activeNavbarIcon: string;
  showNavbarPopUp: (navbarIconName: string, event: React.MouseEvent<HTMLElement>) => void;
  hideNavbarPopUp: () => void;
  popupRef: React.MutableRefObject<HTMLElement | null>;
}

const usePopupForNavbar = (): PopupHook => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [activeNavbarIcon, setActiveNavbarIcon] = useState('');
  const popupRef = useRef<HTMLElement | null>(null);

  const showNavbarPopUp = (navbarIconName: string, event: React.MouseEvent<HTMLElement>) => {
    setActiveNavbarIcon(navbarIconName);
    setShowPopup(true);
    const rect = event.currentTarget.getBoundingClientRect();
    setPopupPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
  };

  const hideNavbarPopUp = () => {
    setShowPopup(false);
  };

  return { showPopup, popupPosition, activeNavbarIcon, showNavbarPopUp, hideNavbarPopUp, popupRef };
};

export default usePopupForNavbar;
