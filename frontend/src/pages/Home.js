import React from 'react'
import NotesDiv from '../components/NotesDiv'

import { useState, useEffect } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import Form from '../components/Form';

const Home = () => {
  const [add, setAdd] = useState(false); //add a new note
  const [cardOpen, setCardOpen]= useState(false);
  const handleAdd = () => {
    setCardOpen(true);
    setAdd(true);
  };  


  return (
    <div className='mt-16 rounded-3xl mb-10 '>      

      <div className=' flex gap-4' >
        <NotesDiv />
      </div>  


      {/* Add a new note */}
      <div
        className="fixed bottom-4 inset-x-1/2 md:left-36"
        style={{ zIndex: 1000 }}
      >
        <button
          type="button"
          className="text-3xl p-3 text-white rounded-full bg-[#1d1d1f] hover:bg-gray-800 hover:drop-shadow-xl"
          onClick={handleAdd}
        >
          <AiOutlinePlus />
        </button>
      </div>  

      {add ? <Form cardOpen={cardOpen} setCardOpen={setCardOpen} setAdd={setAdd} add={add} /> : ''}
    
    </div>
  )
}

export default Home