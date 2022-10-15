import React, { useEffect, useState } from 'react'
import BodyBlock from './BodyBlock'
import EditBox from './EditBox'
import TitleBlock from './TitleBlock'

const NoteInd = ({add, setAdd, note="", setCardOpen, cardOpen}) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [body, setBody] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const changeDisabled= () => {
      setIsDisabled(!edit);
    }
    changeDisabled();
  }, [edit])


  return (
    
    <div className="m-2 w-full lg:w-5/12 px-6 sm:w-10/12 py-12 sm:p-12 rounded-3xl bg-[#1D1D1F] max-h-[95vh]">
      
      <form className='h-full w-full'>
        <div className='h-full flex flex-col justify-between items-center'>

            <TitleBlock add={add} title={title} setTitle={setTitle} tagline={tagline} setTagline={setTagline} isDisabled={isDisabled} setIsDisabled={setIsDisabled} edit={edit} note={note} setCardOpen={setCardOpen} cardOpen={cardOpen} />
            <BodyBlock add={add} body={body} setBody={setBody} isDisabled={isDisabled} edit={edit} note={note} />
            <EditBox setAdd={setAdd} add={add} note={note} cardOpen={cardOpen} setCardOpen={setCardOpen} title={title} tagline={tagline} body={body} edit={edit} setEdit={setEdit} />
            
        </div>
      </form>

    </div>
  )
}

export default NoteInd