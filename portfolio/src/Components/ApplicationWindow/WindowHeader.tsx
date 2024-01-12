type WindowHeaderType = {
  title: string;
};
const WindowHeader = ({ title }: WindowHeaderType) => {
  return <div className="flex flex-row w-full h-[10%] bg-finderBg border-b-[1px] shadow-md border-finderHeaderBg">{title}</div>;
};

export default WindowHeader;
