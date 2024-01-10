import DocumentBoard from '../Documents/DocumentBoard';
const Main = () => {
  return (
    <div className="flex flex-row w-full h-full justify-evenly items-start">
      <div className="flex flex-col w-full">1</div>
      <div className="flex flex-col w-[33%] h-full justify-center">
        <DocumentBoard />
      </div>
    </div>
  );
};

export default Main;
