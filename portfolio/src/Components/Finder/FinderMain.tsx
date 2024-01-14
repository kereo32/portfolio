type FinderMainProps = {
  children: React.ReactNode;
};
const FinderMain = ({ children }: FinderMainProps) => {
  return <div className="flex flex-row flex-wrap w-full h-[90%] bg-finderBg content-start">
    {children}
  </div>;
};

export default FinderMain;
