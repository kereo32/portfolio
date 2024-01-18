type ContactRedirectProps = {
  title: string;
  url: string;
  imgUrl: string;
}

const ContactRedirect = ({ title, url, imgUrl }: ContactRedirectProps) => {
  return (
    <div className='flex flex-col w-[10%] h-[10%] justify-center m-4 max-sm:m-6 '>
      {url.includes('outlook') ?
        <a href={`mailto:${url}`} className='flex flex-col items-center'>
          <img src={imgUrl} alt="note" className="w-10 mt-2" />
          <span className="text-white text-sm font-thin mt-1">{title}</span>
        </a> :
        <a href={url} target="_blank" className='flex flex-col items-center'>
          <img src={imgUrl} alt="note" className="w-10 mt-2" />
          <span className="text-white text-sm font-thin mt-1">{title}</span>
        </a>}
    </div>
  )
}

export default ContactRedirect;