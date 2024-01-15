import React from 'react';
import FinderHeader from './FinderHeader';
import FinderMain from './FinderMain';

type FinderContentAreaProps = {
  title: string;
  children: React.ReactNode;
  browsingHistory: string[];
  changeTitle: (title: string) => void;
};

const FinderContentArea = ({ title, children, browsingHistory, changeTitle }: FinderContentAreaProps) => {
  return (
    <>
      <div className="flex flex-col w-[90%]">
        <FinderHeader browsingHistory={browsingHistory} changeTitle={changeTitle} title={title} />
        <FinderMain>{children}</FinderMain>
      </div>
    </>
  );
};

export default FinderContentArea;
