import web from '/images/web.png'
import usePlayablePreviewwPopUp from '../../Hooks/useWebPreviewPopUp'

type WebPreviewProps = {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  techStack: string;
}

const WebPreview = ({ title, description, liveUrl, githubUrl, techStack }: WebPreviewProps) => {
  const { openPopup, isPopupOpen, Popup } = usePlayablePreviewwPopUp({ title, description, liveUrl, githubUrl, techStack })
  return (
    <>
      <div className='flex flex-col w-[10%] h-[10%] justify-center m-4'>
        <button className='flex flex-col items-center' onClick={() => openPopup()}>
          <img src={web} alt="note" className="w-10 mt-2 invert" />
          <span className="text-white text-sm font-thin mt-1">{title.length > 8 ? title.trim().split(' ')[0] : title}</span>
        </button>
      </div>
      {isPopupOpen && <Popup />}
    </>
  )
}

export default WebPreview