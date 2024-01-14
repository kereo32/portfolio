type FinderMainProps = {
  children: React.ReactNode;
};
const FinderMain = ({ children }: FinderMainProps) => {
  return <div className="flex flex-row w-full h-[90%] bg-finderBg">
    {children}
  </div>;
};

export default FinderMain;
