import mongoose from 'mongoose';
import User from './models/dbUsers.js';
import Room from './models/dbRooms.js';
import Message from './models/dbMessages.js';

let db; // store the DB connection object here

const connection_url = 'mongodb+srv://admin:U43SH4qZRiSrDC6x@cluster0.l5wa7.mongodb.net/mapChatdb?retryWrites=true&w=majority';

const users = [
  {
    name: "Swaff-y",
    number: "0450123123",
    email: "swaff@ga.co"
  },
  {
    name: "Bernie",
    number: "0450123123",
    email: "bern@ga.co"
  },
  {
    name: "Chap",
    number: "0450123123",
    email: "chap@ga.co"
  },
  {
    name: "Chris",
    number: "0450123123",
    email: "chris@ga.co"
  },
];

const rooms = [
  {
    name: "SEI40",
    lastMessage: "Ah, nothing",
    lastTimestamp: 1611975814321,
    participants: [
      {name: "Swaff-y", lastMessage: "What ya doing?"},
      {name: "Bernie", lastMessage: "Ah, nothing"}
    ],
  },
  {
    name: "Hunting",
    lastMessage: "Ah, nothing",
    lastTimestamp: 1611975814321,
    participants: [
      {name: "Swaff-y", lastMessage: "Ah, nothing"},
      {name: "Chap", lastMessage: "Yeah, good thanks"},
      {name: "Chris", lastMessage: "What ya doing?"}
    ],
  },
  {
    name: "Safari",
    lastMessage: "",
    lastTimestamp: null,
    participants: [
      {name: "Bernie", lastMessage: ""},
      {name: "Chap", lastMessage: ""}
    ],
  },
  {
    name: "Fishing",
    lastMessage: "",
    lastTimestamp: null,
    participants: [
      {name: "Swaff-y", lastMessage: ""},
      {name: "Chris", lastMessage: ""}
    ],
  },
];

const messages = [
  {
    message: "Hey, how are ya",
    name: "Swaff-y",
    timestamp: 1611975812883,
    room: "SEI40",
    latitude: -33.7444722,
    longitude: 151.1404311
  },
  {
    message: "Yeah, good thanks",
    name: "Bernie",
    timestamp: 1611975812976,
    room: "SEI40",
    latitude: -33.6322342,
    longitude: 151.1325421
  },
  {
    message: "What ya doing?",
    name: "Swaff-y",
    timestamp: 1611975813463,
    room: "SEI40",
    latitude: -33.5231123,
    longitude: 151.1243122
  },
  {
    message: "Ah, nothing",
    name: "Bernie",
    timestamp: 1611975814321,
    room: "SEI40",
    latitude: -33.5823452,
    longitude: 151.1345121
  },
  {
    message: "Hey, how are ya",
    name: "Swaff-y",
    timestamp: 1611975812883,
    room: "Hunting",
    latitude: -33.7444722,
    longitude: 151.1404311
  },
  {
    message: "Yeah, good thanks",
    name: "Chap",
    timestamp: 1611975812976,
    room: "Hunting",
    latitude: -32.7444722,
    longitude: 150.1404311
  },
  {
    message: "What ya doing?",
    name: "Chris",
    timestamp: 1611975813463,
    room: "Hunting",
    latitude: -30.7444722,
    longitude: 151.1404311
  },
  {
    message: "Ah, nothing",
    name: "Swaff-y",
    timestamp: 1611975814321,
    room: "Hunting",
    latitude: -33.7444722,
    longitude: 151.1404311
  }
];

mongoose.connect(connection_url,{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

db = mongoose.connection

db.on('error', (err) => {
  console.log('Connection error', err);
});

db.once('open', async()=>{
  console.log('DB connected');

  try{
    await User.deleteMany();
    await User.create(users);
    await Room.deleteMany();
    await Room.create(rooms);
    await Message.deleteMany();
    await Message.create(messages);

    const usersResults = await User.find();
    const roomResults = await Room.find();
    const messageResults = await Message.find();

    console.log('Users', usersResults);
    console.log('Rooms', roomResults);
    console.log('Messages', messageResults);
  }catch(err){
    console.log('Error seeding DB:', err);
  }

  process.exit(0);
});
