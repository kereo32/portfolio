import preview from '/images/preview.png'
import usePlayablePreviewPopUp from '../../Hooks/usePlayablePreviewPopUp'
type PlayablePreviewProps = {
  title: string;
  description: string;
  url: string;
  solution: string;
}

const PlayablePreview = ({ title, description, url, solution }: PlayablePreviewProps) => {
  const { openPopup, Popup, isPopupOpen } = usePlayablePreviewPopUp({ title, description, url, solution })
  return (
    <>
      <div className='flex flex-col w-[10%] h-[10%] justify-center m-4'>
        <button className='flex flex-col items-center' onClick={() => openPopup()}>
          <img src={preview} alt="note" className="w-8 mt-2" />
          <span className="text-white text-sm font-thin mt-1">{title.length > 8 ? title.trim().split(' ')[0] : title}</span>
        </button>
      </div>
      {isPopupOpen && <Popup />}
    </>
  )
}

export default PlayablePreview