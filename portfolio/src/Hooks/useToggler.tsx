import { useState } from 'react';

type UseTogglerReturnType = {
  isOpen: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

const useToggler = (initialValue: boolean): UseTogglerReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const toggle = (): void => {
    setIsOpen((prevValue) => !prevValue);
  };

  const setTrue = (): void => {
    setIsOpen(true);
  };

  const setFalse = (): void => {
    setIsOpen(false);
  };

  return {
    isOpen,
    toggle,
    setTrue,
    setFalse,
  };
};

export default useToggler;
