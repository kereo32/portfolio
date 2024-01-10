import { useState } from 'react';

type ApplicationIconProps = {
  applicationImageUrl: string;
  size?: string;
};

const ApplicationIcon = ({ applicationImageUrl, size = 'w-10' }: ApplicationIconProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <button
        className="flex flex-col justify-center items-center ml-4 min-h-max mt-2"
        onClick={() => {
          setIsActive((prevState) => !prevState);
        }}
      >
        <img src={applicationImageUrl} className={`${size} h-8 w-10`} />
        <div
          className={`w-1 h-1 bg-white rounded-full inline-block transition-opacity duration-200 ease-in-out mt-1 mb-1 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </button>
    </>
  );
};

export default ApplicationIcon;
