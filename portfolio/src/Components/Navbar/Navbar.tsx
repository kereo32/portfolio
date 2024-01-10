const TopNavbar = () => {
  return (
    <div className={`fixed top-0 left-0 w-full h-[3%] flex justify-start items-center bg-gradient-to-r from-topBarEasy to-topBarHard via-70% opacity-80`}>
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-[50%] items-start justify-start">sol</div>
        <div className="flex flex-col w-[50%] items-end justify-start">sağ</div>
      </div>
    </div>
  );
};

export default TopNavbar;
