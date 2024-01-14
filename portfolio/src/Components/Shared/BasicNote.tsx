import basicNote from '/images/note.png'
import useNotePopUp from '../../Hooks/useNotePopUp'

type BasicNoteProps = {
  name: string;
  title: string;
  content: string
}

const BasicNote = ({content,name,title}: BasicNoteProps) => {
  const {openPopup,Popup,isPopupOpen} = useNotePopUp({title,content})
  return (
    <div className='flex flex-col w-fit h-[10%] justify-center m-4'>
      <button className='flex flex-col items-center' onClick={()=>openPopup()}>
      <img src={basicNote} alt="note" className="w-8 mt-2" />
      <span className="text-white text-sm font-thin mt-1">{name}</span>
      </button>
      {isPopupOpen && <Popup/>}
    </div>
  )
}

export default BasicNote