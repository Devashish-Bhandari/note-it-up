const notesRoutes = require('./routes/notes');

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.json());

app.use( (req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/notes',notesRoutes);


// connect to db 
mongoose.connect(process.env.MONGO_URI)
    .then( () => {
        // listen for requests
        app.listen(process.env.PORT, ()=> {
            console.log("Connected to the database, Listening on port 4000");
        })
    })
    .catch( (error) =>{
        console.log('Error while connecting to the database. ', error);
    })


