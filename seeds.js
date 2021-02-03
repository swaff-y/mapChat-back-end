import mongoose from 'mongoose';
import User from './models/dbUsers.js';
import Room from './models/dbRooms.js';
import Message from './models/dbMessages.js';

let db; // store the DB connection object here

const connection_url = 'mongodb+srv://admin:U43SH4qZRiSrDC6x@cluster0.l5wa7.mongodb.net/mapChatdb?retryWrites=true&w=majority';

const users = [
  {
    name: "User1",
    number: "0450123123",
    email: "email@ga.co",
    lastRoom: "SEI40"
  },
  {
    name: "User2",
    number: "0450123123",
    email: "email@ga.co",
    lastRoom: "SEI40"
  },

  {
    name: "User3",
    number: "0450123123",
    email: "email@ga.co",
    lastRoom: "SEI40"
  },
  {
    name: "User4",
    number: "0450123123",
    email: "email@ga.co",
    lastRoom: "SEI40"
  },
  {
    name: "User5",
    number: "0450123123",
    email: "email@ga.co",
    lastRoom: "SEI40"
  },
  {
    name: "User6",
    number: "0450123123",
    email: "email@ga.co",
    lastRoom: "SEI40"
  },
  {
    name: "User7",
    number: "0450123123",
    email: "email@ga.co",
    lastRoom: "SEI40"
  },
  {
    name: "User8",
    number: "0450123123",
    email: "email@ga.co",
    lastRoom: "SEI40"
  },
  {
    name: "User9",
    number: "0450123123",
    email: "email@ga.co",
    lastRoom: "SEI40"
  },
  {
    name: "User10",
    number: "0450123123",
    email: "email@ga.co",
    lastRoom: "SEI40"
  },
  {
    name: "User11",
    number: "0450123123",
    email: "email@ga.co",
    lastRoom: "SEI40"
  },
];

const rooms = [
  {
    name: "SEI40",
    lastMessage: "Ah, nothing",
    lastTimestamp: 1611975814321,
    participants: [
      {name: "User1", lastMessage: "What ya doing?"},
      {name: "User2", lastMessage: "Ah, nothing"}
      {name: "User3", lastMessage: "Ah, nothing"},
      {name: "User4", lastMessage: "Ah, nothing"}
      {name: "User5", lastMessage: "Ah, nothing"},
    ],
  },
  {
    name: "SEI40-Staff",
    lastMessage: "Ah, nothing",
    lastTimestamp: 1611975814321,
    participants: [
      {name: "User1", lastMessage: "What ya doing?"},
      {name: "User2", lastMessage: "Ah, nothing"}
      {name: "User3", lastMessage: "Ah, nothing"},
      {name: "User4", lastMessage: "Ah, nothing"}
      {name: "User5", lastMessage: "Ah, nothing"},
    ],
  },
  {
    name: "SEI40-Students",
    lastMessage: "Ah, nothing",
    lastTimestamp: 1611975814321,
    participants: [
      {name: "User1", lastMessage: "What ya doing?"},
      {name: "User6", lastMessage: "Ah, nothing"}
      {name: "User7", lastMessage: "Ah, nothing"},
      {name: "User8", lastMessage: "Ah, nothing"}
      {name: "User9", lastMessage: "Ah, nothing"},
      {name: "User10", lastMessage: "Ah, nothing"}
      {name: "User11", lastMessage: "Ah, nothing"},
    ],
  },
];

const messages = [
  {
    message: "What ya doing?",
    name: "User1",
    timestamp: 1611975812883,
    room: "SEI40",
    latitude: -33.745018,
    longitude: 151.142471
  },
  {
    message: "What ya doing?",
    name: "User1",
    timestamp: 1611975812883,
    room: "SEI40-Staff",
    latitude: -33.745018,
    longitude: 151.142471
  },
  {
    message: "What ya doing?",
    name: "User1",
    timestamp: 1611975812883,
    room: "SEI40-Students",
    latitude: -33.745018,
    longitude: 151.142471
  },
  {
    message: "Ah, nothing",
    name: "User2",
    timestamp: 1611975812883,
    room: "SEI40",
    latitude: -33.677494,
    longitude: 150.9160931
  },
  {
    message: "Ah, nothing",
    name: "User2",
    timestamp: 1611975812883,
    room: "SEI40-Staff",
    latitude: -33.677494,
    longitude: 150.916093
  },
  {
    message: "Ah, nothing",
    name: "User3",
    timestamp: 1611975812883,
    room: "SEI40",
    latitude: -33.740188,
    longitude: 150.864836
  },
  {
    message: "Ah, nothing",
    name: "User3",
    timestamp: 1611975812883,
    room: "SEI40-Staff",
    latitude: -33.740188,
    longitude: 150.864836
  },
  {
    message: "Ah, nothing",
    name: "User4",
    timestamp: 1611975812883,
    room: "SEI40",
    latitude: -33.881083,
    longitude: 151.272301
  },
  {
    message: "Ah, nothing",
    name: "User4",
    timestamp: 1611975812883,
    room: "SEI40-Staff",
    latitude: -33.881083,
    longitude: 151.272301
  },
  {
    message: "Ah, nothing",
    name: "User5",
    timestamp: 1611975812883,
    room: "SEI40",
    latitude: -33.859342,
    longitude: 151.155157
  },
  {
    message: "Ah, nothing",
    name: "User5",
    timestamp: 1611975812883,
    room: "SEI40-Staff",
    latitude: -33.859342,
    longitude: 151.155157
  },
  {
    message: "Ah, nothing",
    name: "User6",
    timestamp: 1611975812883,
    room: "SEI40",
    latitude: -33.851532,
    longitude: 151.032883
  },
  {
    message: "Ah, nothing",
    name: "User6",
    timestamp: 1611975812883,
    room: "SEI40-Students",
    latitude: -33.851532,
    longitude: 151.032883
  },
  {
    message: "Ah, nothing",
    name: "User7",
    timestamp: 1611975812883,
    room: "SEI40",
    latitude: -33.765675,
    longitude: 151.162506
  },
  {
    message: "Ah, nothing",
    name: "User7",
    timestamp: 1611975812883,
    room: "SEI40-Students",
    latitude: -33.765675,
    longitude: 151.162506
  },
  {
    message: "Ah, nothing",
    name: "User8",
    timestamp: 1611975812883,
    room: "SEI40",
    latitude: -33.758883,
    longitude: 151.29547
  },
  {
    message: "Ah, nothing",
    name: "User8",
    timestamp: 1611975812883,
    room: "SEI40-Students",
    latitude: -33.758883,
    longitude: 151.29547
  },
  {
    message: "Ah, nothing",
    name: "User9",
    timestamp: 1611975812883,
    room: "SEI40",
    latitude: -33.729278,
    longitude: 151.156728
  },
  {
    message: "Ah, nothing",
    name: "User9",
    timestamp: 1611975812883,
    room: "SEI40-Students",
    latitude: -33.729278,
    longitude: 151.156728
  },
  {
    message: "Ah, nothing",
    name: "User10",
    timestamp: 1611975812883,
    room: "SEI40",
    latitude: -33.71357,
    longitude: 151.297816
  },
  {
    message: "Ah, nothing",
    name: "User10",
    timestamp: 1611975812883,
    room: "SEI40-Students",
    latitude: -33.71357,
    longitude: 151.297816
  },
  {
    message: "Ah, nothing",
    name: "User11",
    timestamp: 1611975812883,
    room: "SEI40",
    latitude: -33.636504,
    longitude: 151.32903
  },
  {
    message: "Ah, nothing",
    name: "User11",
    timestamp: 1611975812883,
    room: "SEI40-Students",
    latitude: -33.636504,
    longitude: 151.32903
  },
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
