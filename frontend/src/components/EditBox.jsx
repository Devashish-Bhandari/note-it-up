import React, { useEffect, useState } from "react";
import {MdDelete, MdModeEdit} from 'react-icons/md';
import {BsFillHandThumbsUpFill} from 'react-icons/bs';
import { useNotesContext } from "../hooks/useNotesContext";

const EditBox = ({setAdd, add="false", note, cardOpen, setCardOpen, title, tagline, body, edit, setEdit}) => {
  const {dispatch} = useNotesContext();
  const [error, setError] = useState(null)

  useEffect(() => {
    if(add===true) setEdit(true)
    else setEdit(false)
  
  }, [])
  
  // HANDLE EDIT 
  const handleEdit= () =>{
    setEdit(!edit);
  }

  // HANDLE PATCH
  const handlePatch= async () =>{
    const noteDiff= {title, tagline, body};

    const response= await fetch('/api/notes/'+note._id,{
      method:'PATCH',
      body: JSON.stringify(noteDiff),
      headers:{
        'Content-Type':'application/json'
      }
    })

    const json = await response.json()
    const _id= json.note._id;
    const newData= {_id, title, tagline, body};

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setError(null)
      dispatch({type: 'UPDATE_NOTE', payload: newData})
      handleEdit();
    }
    
  }

  
  // HANDLE SAVE
  const handleSave= async (e) =>{
    e.preventDefault();
    const note = { title, tagline, body};
    // console.log(note);
    
    const response = await fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    
    if (!response.ok) {
      setError(json.error)
      // console.log("error coming", json.error);
    }
    if (response.ok) {
      setError(null)
      console.log("new json added", json);
      dispatch({type: 'CREATE_NOTE', payload: json})
      setAdd(!add);
      handleEdit();
    }
    
  }

  // HANDLE DELETE
  const handleDelete= async () => {
    // console.log(note);

    const response= await fetch('/api/notes/'+note._id , {
      method: 'DELETE',
    })
    const json= await response.json()

    if (response.ok){
      dispatch({type: 'DELETE_NOTE', payload: json});
      console.log('deleted');
      setCardOpen(false);

    }

  }

  return (
    <div className="flex w-full justify-start gap-3 mt-5">
        {edit?
          <button
           type="button"
            onClick={add===true? handleSave: handlePatch}
          >
            <p className="flex gap-3 bg-gray-200 py-2 px-4 text-lg items-center justify-center rounded-3xl hover:bg-gray-900 hover:text-gray-300 ">
              <BsFillHandThumbsUpFill /> Save
            </p>
          </button>:
          <button
          type="button"
           onClick={handleEdit}  
         >
          <p className="flex gap-3 bg-gray-200 py-2 px-4 text-lg items-center justify-center rounded-3xl hover:bg-gray-900 hover:text-gray-300 ">
            <MdModeEdit /> Edit
          </p>
          </button>
        }
      
      {add===true? <></>: <button
        type="button" 
        onClick={handleDelete}
      >
        <p className="flex gap-3 border-[1px] border-gray-300 bg-none py-2 px-4 text-lg items-center justify-center rounded-3xl text-gray-300 hover:bg-white hover:text-gray-900">
          <MdDelete /> Delete
        </p>
      </button>}

    </div>
  );
};

export default EditBox;
