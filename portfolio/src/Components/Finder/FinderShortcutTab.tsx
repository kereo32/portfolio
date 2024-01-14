type FinderShortcutTabProps = {
  title: string;
  imageUrl: string;
  isActive?: boolean;
  handleActive:() =>  void;
};

const FinderShortcutTab = ({ title, imageUrl,isActive,handleActive }: FinderShortcutTabProps) => {
  return (
    <>
      <div className={`flex flex-row w-full h-[10%] items-center hover:bg-finderBg hover:bg-opacity-40 ${isActive && ' bg-finderHeaderBg font-bold'}`}>
        <button onClick={()=>handleActive()} className="flex flex-row">
          <img className="h-4 w-4 mr-2 invert" src={imageUrl} alt={title} />
          <p>{title}</p>
        </button>
      </div>
    </>
  );
};

export default FinderShortcutTab;
