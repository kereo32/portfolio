import React from 'react';
import WindowSidebar from './WindowSidebar';
import WindowContentArea from './WindowContentArea';

type ApplicationWindowProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
};

const Window = ({ title, children, isOpen }: ApplicationWindowProps) => {
  return (
    <div className={`transition-transform transform ${isOpen ? 'scale-y-100 scale-x-100' : 'scale-y-0 scale-x-0'} flex flex-row w-[70%] h-[80%]`}>
      <WindowSidebar />
      <WindowContentArea title={title} children={children} />
    </div>
  );
};

export default Window;
