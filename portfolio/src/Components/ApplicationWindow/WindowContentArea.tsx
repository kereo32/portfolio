import React from 'react';
import WindowHeader from './WindowHeader';
import WindowMain from './WindowMain';

type WindowContentAreaProps = {
  title: string;
  children: React.ReactNode;
};

const WindowContentArea = ({ title, children }: WindowContentAreaProps) => {
  return (
    <>
      <div className="flex flex-col w-[90%]">
        <WindowHeader title={title} />
        <WindowMain>{children}</WindowMain>
      </div>
    </>
  );
};

export default WindowContentArea;
