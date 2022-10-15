import React from 'react'
import NoteCard from './NoteCard'


const NotesContainer = ({notes, currentPage}) => {
  
  const notesPerPage= 6;
  const indexOfLastNote= currentPage*notesPerPage;
  const indexOfFirstNote= indexOfLastNote-notesPerPage;
  const currentNotes= notes.slice(indexOfFirstNote, indexOfLastNote);
  // console.log("notes", notes);
  // console.log("current Notes", currentPage);
  // console.log(indexOfFirstNote);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>

      {currentNotes && currentNotes.map( (note) => (
          <NoteCard key={note._id} note={note} />
      ))}

      
    </div>
  )
}

export default NotesContainer