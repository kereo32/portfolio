import React from 'react';
import FinderSideBar from './FinderSideBar';
import FinderContentArea from './FinderContentArea';

type FinderProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  changeTitle: (title: string) => void;
};

const Finder = ({ title, children, isOpen,changeTitle }: FinderProps) => {
  return (
    <div className={`transition-transform transform ${isOpen ? 'scale-y-100 scale-x-100' : 'scale-y-0 scale-x-0'} flex flex-row w-[70%] h-[80%]`}>
      <FinderSideBar changeTitle={changeTitle} title={title}/>
      <FinderContentArea title={title} children={children} />
    </div>
  );
};

export default Finder;
