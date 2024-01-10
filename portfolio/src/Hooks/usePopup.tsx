import { useState, useRef } from 'react';

interface PopupHook {
  showPopup: boolean;
  popupPosition: { top: number; left: number };
  activeNavbarIcon: string;
  show: (navbarIconName: string, event: React.MouseEvent<HTMLElement>) => void;
  hide: () => void;
  popupRef: React.MutableRefObject<HTMLElement | null>;
}

const usePopup = (): PopupHook => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [activeNavbarIcon, setActiveNavbarIcon] = useState('');
  const popupRef = useRef<HTMLElement | null>(null);

  const show = (navbarIconName: string, event: React.MouseEvent<HTMLElement>) => {
    setActiveNavbarIcon(navbarIconName);
    setShowPopup(true);
    const rect = event.currentTarget.getBoundingClientRect();
    setPopupPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
  };

  const hide = () => {
    setShowPopup(false);
  };

  return { showPopup, popupPosition, activeNavbarIcon, show, hide, popupRef };
};

export default usePopup;
