type WindowMainProps = {
  children: React.ReactNode;
};
const WindowMain = ({ children }: WindowMainProps) => {
  return <div className="flex flex-row w-full h-[90%] bg-finderBg">{children}</div>;
};

export default WindowMain;
