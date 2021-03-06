//importing
// Use import like this add "type": "module" to package.json
import express from 'express';
import mongoose from 'mongoose';
// import Messages from "./models/dbMessages.js";
// const messagesController = require('./controllers/messagesController');
import {syncMessage,newMessage} from './controllers/messagesController.js';
import {syncRoom,getRoom} from './controllers/roomsController.js';
import {syncUsers,roomUser} from './controllers/usersController.js';
import Pusher from 'pusher';
import cors from 'cors';

//app config
const app = express()
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1147214",
  key: "1bf1ac863ab88a3d0532",
  secret: "bf7a609979e086f1c19e",
  cluster: "ap4",
  useTLS: true
});

//middleware
app.use(express.json());
app.use(cors());

// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

//db config
const connection_url = 'mongodb+srv://admin:U43SH4qZRiSrDC6x@cluster0.l5wa7.mongodb.net/mapChatdb?retryWrites=true&w=majority';
mongoose.connect(connection_url,{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection


db.once('open', ()=>{
  console.log('DB connected');

  const msgCollection = db.collection('messagecontents')
  const roomCollection = db.collection('roomcontents')
  const changeStream = msgCollection.watch();

  changeStream.on('change', (change) => {
    console.log('A change occured', change);

    if(change.operationType === 'insert'){
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'inserted',{
        message: messageDetails.message,
        name: messageDetails.name,
        timestamp: messageDetails.timestamp,
        room: messageDetails.room,
        latitude: messageDetails.latitude,
        longitude: messageDetails.longitude
      });

    }else{
      console.log('Error triggering Pusher');
    }
  });
})

//api routes
app.get('/',(req,res)=>res.status(200).send('Hello World'));

 app.get('/messages/sync/:room', syncMessage );
 app.get('/rooms/sync/:user', syncRoom );
 app.get('/users', syncUsers );
 app.get('/room/:name', getRoom );

 app.post('/messages/new', newMessage );
 app.post('/user/:user/room/:room', roomUser);

// app.get('/messages/sync/:room', (req,res) => {
//   Messages.find((err,data) => {
//     if( err ){
//       res.status(500).send(err);
//     }else{
//       res.status(200).send(data);
//     }
//   })
// });
// //
// app.post('/messages/new', (req,res) => {
//   const dbMessage = req.body;
//
//   Messages.create(dbMessage, (err,data) => {
//     if(err){
//       res.status(500).send(err)
//     }else{
//       res.status(201).send(data)
//     }
//   })
// })

//listener
app.listen(port,()=> console.log(`Listening on localhost:${port}`));
