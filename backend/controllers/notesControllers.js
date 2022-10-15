const Note = require('../models/notesModel');
const mongoose = require('mongoose')

// get all notes
const getNotes = async (req, res) => {
    const notes= await Note.find().sort({isPinned: -1, createdAt: -1});
    res.status(200).json(notes);
}


// get a single note
const getNote = async (req, res) => {
    const {id} = req.params

    // checking that the given id is of the valid mongoose type
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such note'});
    }

    const note = await Note.findById(id);

    if(!note){
        return res.status(404).json({error: "No Such note"});
    }

    res.status(200).json(note);
}


// create a new note
const createNote= async(req, res) =>{
    const {isPinned, title, tagline, body } = req.body

    // add doc to db
    try{
        const note= await Note.create({isPinned, title, tagline, body});
        res.status(200).json(note);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

// delete a note
const deleteNote= async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId(id)){
        return res.status(404).json({error: "No such note"})
    }

    const note= await Note.findOneAndDelete({_id: id})

    if(!note){
        res.status(404).json({error: 'No such note'})
    }
    
    res.status(200).json({note});

}

// update a note
const updateNote= async (req, res) =>{
    const {id}= req.params

    if(!mongoose.Types.ObjectId(id)){
        return res.json({error: "No such note"})
    }

    // ...req.body spreads the properties(params) that it has in this object
    const note= await Note.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!note){
        res.status(404).json({error: 'No such note'})
    }
    
    res.status(200).json({note});
}



module.exports = {
    getNotes, getNote, createNote, deleteNote, updateNote
}