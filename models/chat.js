const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    from : {
        type : String,
        required : true
    } ,
    to : {
        type : String,
        required : true
    } ,
    msg : {
        type : String,
        required : true
    } ,
    createdAt : {
        type : Date 
    }
});

const Chat = mongoose.model("chat" , chatSchema);
module.exports = Chat;