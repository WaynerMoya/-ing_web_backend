
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bonuschema = new Schema({

    _idUser : {
        type : Schema.ObjectId,
        ref : 'User',
    },
    date : {
        type : String, 
        required : true,
    },
    bonus : {
        type : Number,
        required : true
    },
    reason : {
        type : String ,
        required: true
    }
}, {
    timestamps : true
}) 

module.exports = mongoose.model('Bonus' , Bonuschema)