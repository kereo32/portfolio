import Folder from './Folder';
import Papers from './Papers';

const DocumentBoard = () => {
  return (
    <div className="flex flex-col w-full h-[75%] justify-start items-end">
      <div className="flex flex-row w-full h-fit items-center justify-end">
        <Folder title="Projects" />
        <Folder title="Personal" />
      </div>
      <div className="flex flex-col w-full h-fit items-end justify-end">
        <div className="flex flex-col w-ful h-full">
          <Papers title="Documents" />
        </div>
        <div className="flex flex-col w-ful h-full">
          <Papers title="Notes" />
        </div>
      </div>
    </div>
  );
};

export default DocumentBoard;
