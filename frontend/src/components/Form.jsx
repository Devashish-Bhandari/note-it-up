import React from 'react'
import NoteInd from './NoteInd'

const Form = ({cardOpen, setCardOpen, setAdd, add}) => {
  
  return (
    <div className={` ${cardOpen? 'block': 'hidden'} fixed w-screen min-h-screen bg-[#000000aa] top-0 left-0 flex justify-center items-center`} style={{zIndex:1020}}> 
        <NoteInd add={add} setAdd={setAdd} note={""} setCardOpen={setCardOpen} cardOpen={cardOpen} />
    </div>
  )
}

export default Form