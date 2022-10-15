import React, { useEffect, useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { AiOutlineExpandAlt } from "react-icons/ai";
import NoteInd from "./NoteInd";

import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useNotesContext } from "../hooks/useNotesContext";
import { set } from "date-fns";

const NoteCard = ({ note }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const {dispatch} = useNotesContext();
  const [error, setError] = useState(null);

  const handleOpen = () => {
    setCardOpen(true);
  };

  useEffect(() => {
    const handlePinLoad= ()=>{
      setIsPinned(note.isPinned);
    }
    handlePinLoad();
  }, [])
  

  //   // HANDLE PATCH
  const handlePin = async () => {
    const title= note.title;
    const tagline= note.tagline;
    const body= note.body;
    const isPinned = !note.isPinned;
    const noteDiff = {isPinned, title, tagline, body};

    const response = await fetch("/api/notes/" + note._id, {
      method: "PATCH",
      body: JSON.stringify(noteDiff),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    const _id = json.note._id;
    const newData= {_id, isPinned, title, tagline, body};

    if (!response.ok) {
      setError(json.error);
      console.log(json.error);
    }

    if (response.ok) {
      setError(null);
      console.log("new json updated", noteDiff);
      dispatch({ type: "UPDATE_NOTE", payload: newData });
      setIsPinned(isPinned);
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div
        className={`${
          cardOpen ? "shadow-lg shadow-gray-200 " : ""
        } p-10 w-[325px] max-w-325 h-325 rounded-3xl bg-white relative `}
      >
        {/* Pin the note */}
        <div className="absolute right-5 top-5" style={{ zIndex: 100 }}>
          <button
            type="button"
            className={`text-lg p-2 shadow-md ${
              isPinned
                ? "text-[#FFC400] hover:bg-gray-200"
                : "text-white  hover:bg-gray-300"
            } rounded-full bg-[#F1F4F6] border-gray-200 border-[1px] hover:drop-shadow-xl`}
            onClick={handlePin}
          >
            <BsBookmarkFill />
          </button>
        </div>

        <div className="w-full flex-col h-full flex items-center justify-between">
          <div className="w-full">
            <h2 className="text-2xl font-medium tracking-normal leading-snug pb-1">
              {note.title}
            </h2>
            <h3 className="text-lg tracking-normal ">{note.tagline}</h3>
          </div>

          <div className="w-full">
            <p className="text-gray-400 capitalize">
              {formatDistanceToNow(new Date(note.createdAt), {
                addSuffix: "true",
              })}
            </p>
          </div>
        </div>

        {/* Expand the note */}
        <div className="absolute right-5 bottom-5" style={{ zIndex: 100 }}>
          <button
            type="button"
            className="text-2xl p-2 shadow-md text-white rounded-full bg-[#6768ab] hover:bg-gray-400 border-gray-200 border-[1px] hover:drop-shadow-xl"
            onClick={handleOpen}
          >
            <AiOutlineExpandAlt />
          </button>
        </div>
      </div>

      {/* Expanded Note */}
      <div
        className={` ${
          cardOpen ? "block" : "hidden"
        } fixed w-screen min-h-screen bg-[#000000aa] top-0 left-0 flex justify-center items-center`}
        style={{ zIndex: 1020 }}
      >
        <NoteInd note={note} setCardOpen={setCardOpen} cardOpen={cardOpen} />
      </div>
    </div>
  );
};

export default NoteCard;
