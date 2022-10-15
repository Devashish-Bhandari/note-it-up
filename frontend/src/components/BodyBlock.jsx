import React, { useEffect } from 'react'

const BodyBlock = ({add, body, setBody, isDisabled, setIsDisabled, edit,note}) => {
  useEffect(()=>{
    add===true? setBody(''):setBody(note.body);
  }, [])

  return (
    <div className='w-full bg-gray-100 overflow-hidden p-2 rounded-3xl'>
      
        <div className='w-full bg-gray-100 p-5 ' style={{height:'45vh'}}>
            <textarea 
              onChange={(e) => setBody(e.target.value)} 
              className='h-full text-md md:text-lg text-justify outline-none resize-none bg-transparent w-full' 
              disabled={isDisabled}
              value={body}
              placeholder="Enter the Body Here"
            />          
        </div>

    </div>
  )
}

export default BodyBlock