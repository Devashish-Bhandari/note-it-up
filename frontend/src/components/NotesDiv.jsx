import React, { useEffect, useState } from 'react'
import { useNotesContext } from '../hooks/useNotesContext'
import NotesContainer from './NotesContainer'
import Paginate from './Paginate'

const NotesDiv = () => {
  const {notes, dispatch} = useNotesContext()
  const [currentPage, setCurrentPage] = useState(1);

  // Set Information in Cards
  useEffect( () => {
    const fetchNotes= async () => {
      const response = await fetch('/api/notes');
      const json = await response.json();

      // if response is ok, destructure the action
      if(response.ok){
        dispatch({type: 'SET_NOTES', payload: json})
      }
    }
    fetchNotes();
  }, [dispatch])
  


  return (
    <div className="flex-1 p-4 pt-16 md:p-16 rounded-3xl m-2 bg-[#6768AB] justify-between w-full">
      
      <div className='w-full mx-auto'>

        <div className='mb-8'>
          <h1 className='text-4xl md:text-5xl text-center text-white sm:text-left font-bold'>Your Notes</h1>
        </div>

        {notes && <NotesContainer notes={notes} currentPage={currentPage} />}

        {notes && <Paginate notes={notes} currentPage={currentPage} setCurrentPage={setCurrentPage} />}

      </div>

    </div>
  )
}

export default NotesDiv