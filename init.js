
const mongoose = require('mongoose');

const Chat = require('./models/chat.js');

main()
.then( () => console.log("connection successfully"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

// let chat1 = new Chat({
//     from : 'jaimin',
//     to : 'bhargavi' ,
//     msg : 'Su kre 6 !',
//     createdAt : new Date()
// })

let allChats = [
    {
        from : 'jaimin',
        to : 'dhyey' ,
        msg : 'is your Network finish ?',
        createdAt : new Date()
    },
    {
        from : 'jaimin',
        to : 'narendra' ,
        msg : 'do you going to college',
        createdAt : new Date()
    },
    {
        from : 'jaimin',
        to : 'hasti' ,
        msg : "do you want to learn web dev  ",
        createdAt : new Date()
    },
    {
        from : 'jaimin',
        to : 'path' ,
        msg : 'are you ok ?',
        createdAt : new Date()
    }

]
Chat.insertMany(allChats);


