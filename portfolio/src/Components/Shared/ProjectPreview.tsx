import preview from '/images/preview.png'
type ProjectPreviewProps = {
  title: string;
  description?: string;
  url? : string;
}

const ProjectPreview = ({title,description,url}: ProjectPreviewProps) => {
  return (
    <div className='flex flex-col w-[10%] h-[10%] justify-center m-6'>
      <button className='flex flex-col items-center'>
      <img src={preview} alt="note" className="w-8 mt-2" />
      <span className="text-white text-sm font-thin mt-1">{title.length > 8 ? title.trim().split(' ')[0] : title}</span>
      </button>
    </div>
  )
}

export default ProjectPreview