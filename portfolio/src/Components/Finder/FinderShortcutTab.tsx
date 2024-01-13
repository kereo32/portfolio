type FinderShortcutTabProps = {
  title: string;
  imageUrl: string;
};

const FinderShortcutTab = ({ title, imageUrl }: FinderShortcutTabProps) => {
  return (
    <>
      <div className={`flex flex-row w-full h-[10%] items-center hover:bg-finderBg hover:bg-opacity-40`}>
        <button className="flex flex-row">
          <img className="h-4 w-4 mr-2 invert" src={imageUrl} alt={title} />
          <p>{title}</p>
        </button>
      </div>
    </>
  );
};

export default FinderShortcutTab;
