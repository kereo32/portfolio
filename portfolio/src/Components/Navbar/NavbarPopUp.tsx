import React from 'react';

interface NavbarPopUpProps {
  position: { top: number; left: number };
  onClose: () => void;
  children: React.ReactNode;
}

const NavbarPopUp: React.FC<NavbarPopUpProps> = ({ position, onClose, children }) => {
  const popupStyle: React.CSSProperties = {
    position: 'absolute',
    top: position.top + 8,
    left: position.left + 15,
    background: 'rgba(0, 0, 0, 0.7)',
    padding: '10px',
    zIndex: 999,
  };

  return (
    <div className="rounded-md border-white border border-opacity-70 flex flex-col items-start justify-center" style={popupStyle}>
      <button onClick={onClose} className="text-gray-600 hover:text-black focus:outline-none">
        Close
      </button>
      {children}
    </div>
  );
};

export default NavbarPopUp;
