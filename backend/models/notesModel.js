const mongoose  = require ('mongoose');
const Schema= mongoose.Schema

const noteSchema= new Schema({
    isPinned:{
        type: Boolean,
        default: false
    },
    title:{
        type: String,
        required: true
    },
    tagline:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
},
{
    timestamps: true
})

module.exports= mongoose.model('Note', noteSchema)