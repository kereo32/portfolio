import React from 'react';
import FinderHeader from './FinderHeader';
import FinderMain from './FinderMain';

type FinderContentAreaProps = {
  title: string;
  children: React.ReactNode;
};

const FinderContentArea = ({ title, children }: FinderContentAreaProps) => {
  return (
    <>
      <div className="flex flex-col w-[90%]">
        <FinderHeader title={title} />
        <FinderMain>{children}</FinderMain>
      </div>
    </>
  );
};

export default FinderContentArea;
