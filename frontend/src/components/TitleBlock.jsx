import { useEffect } from 'react';
import {MdClose} from 'react-icons/md'

import formatDistanceToNow from 'date-fns/formatDistanceToNow';


const TitleBlock = ({add, title, setTitle, tagline, setTagline, isDisabled, setIsDisabled, edit, note, cardOpen, setCardOpen}) => {
  
  useEffect(()=>{
    add===true? setTitle(''):setTitle(note.title);
    add===true? setTitle(''): setTagline(note.tagline);
  }, [])
  
  useEffect(() => {
    const changeDisabled= () => {
      setIsDisabled(!edit);
    }
    changeDisabled();
  }, [])

  
  const handleClose= () =>{
    setCardOpen(false);
  }

  return (
    <div className='flex w-full '>
       
        <div className='w-full'>
            <div className='flex flex-row justify-between items-center pb-4'>
              
              {add? <span> </span> : <h5 className='text-md md:text-lg tracking-normal text-gray-500 leading-tight capitalize'>{add? '' : formatDistanceToNow(new Date(note.createdAt))}</h5> }
              
              <button
                type="button"
                className="text-2xl text-white "
                onClick= {handleClose}
              >
                <MdClose />
              </button>

            </div>

            <textarea 
              onChange={(e)=> setTitle(e.target.value)} 
              className='w-full text-2xl md:text-4xl tracking-normal font-medium text-gray-200 leading-tight pb-2 shadow-none resize-none bg-transparent outline-none' 
              style={{borderBottom: edit? '1px solid white': 'none'}} disabled={isDisabled} 
              placeholder="Enter the Title Here" 
              value={title}
              required
            />
                

            <textarea 
              onChange={(e) => setTagline(e.target.value)} 
              className='w-full tagline text-lg leading-snug tracking-normal text-gray-200 md:text-xl pb-5 resize-none bg-transparent outline-none mb-2' 
              style={{borderBottom: edit? '1px solid white': 'none'}} 
              disabled={isDisabled} 
              placeholder="Enter the Tagline Here"
              value={tagline}
              required
            />

        </div>
    </div>
  )
}

export default TitleBlock