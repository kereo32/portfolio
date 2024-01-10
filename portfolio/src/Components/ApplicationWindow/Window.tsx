type ApplicationWindowProps = {
  title: string;
  children: React.ReactNode;
};

const Window = ({ title, children }: ApplicationWindowProps) => {
  return (
    <div className="flex flex-row w-[70%] h-[80%] bg-black">
      <div className="flex flex-col w-[10%] h-full bg-gray-500">Sidebar</div>
      <div className="flex flex-col w-[90%] h-full bg-gray-400">
        <div className="flex flex-row w-full h-[10%] bg-gray-300">{title}</div>
        <div className="flex flex-row w-full h-[90%] bg-gray-200">{children}</div>
      </div>
    </div>
  );
};

export default Window;
