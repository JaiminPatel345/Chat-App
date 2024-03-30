const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');

const app = express();
const port = 3000;

app.use (express.urlencoded({ extended: true })); 

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

app.use(express.static(path.join(__dirname , 'public')));


main()
.then( () => console.log("connection successfully"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}



app.get('/' , (req , res) => {
    res.send("Working");
})


app.listen(port , () => console.log(`listen on port ${port}`));
