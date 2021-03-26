const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true , 'Please fill up the title before submitting'],
        unique:true,
        trim:true,
        maxlength:[40,'Too Lengthy note title , max chars number is 40']
    },
    description:{
        type:String,
        required:[true , 'Please fill up the description before submitting'],
        trim:true,
        maxlength:[200,'Too Lengthy note title , max chars number is 200']
    }
});
module.exports=mongoose.models.Note || mongoose.model('Note',NoteSchema) ;