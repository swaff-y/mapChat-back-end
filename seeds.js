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
    participants: ["Swaff-y","Bernie"],
  },
  {
    name: "Hunting",
    participants: ["Swaff-y","Chap","Chris"],
  },
  {
    name: "Safari",
    participants: ["Bernie", "Chap"],
  },
  {
    name: "Fishing",
    participants: ["Swaff-y","Chris"],
  },
];

const messages = [
  {
    message: "Hey, how are ya",
    name: "Swaff-y",
    timestamp: "1611975812883",
    room: "SEI40"
  },
  {
    message: "Yeah, good thanks",
    name: "Bernie",
    timestamp: "1611975812976",
    room: "SEI40"
  },
  {
    message: "What ya doing?",
    name: "Swaff-y",
    timestamp: "1611975813463",
    room: "SEI40"
  },
  {
    message: "Ah, nothing",
    name: "Bernie",
    timestamp: "1611975814321",
    room: "SEI40"
  },
  {
    message: "Hey, how are ya",
    name: "Swaff-y",
    timestamp: "1611975812883",
    room: "Hunting"
  },
  {
    message: "Yeah, good thanks",
    name: "Chap",
    timestamp: "1611975812976",
    room: "Hunting"
  },
  {
    message: "What ya doing?",
    name: "Chris",
    timestamp: "1611975813463",
    room: "Hunting"
  },
  {
    message: "Ah, nothing",
    name: "Swaff-y",
    timestamp: "1611975814321",
    room: "Hunting"
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
  }catch{
    console.log('Error seeding DB:', err);
  }

  process.exit(0);
});

// const insertMessages = () => {
//
//
//   db.collection('messagecontents').insertMany([
//     {
//       message: "Hey, how are ya",
//       name: "Swaff-y",
//       timestamp: "1611975812883",
//       room: "SEI40"
//     },
//     {
//       message: "Yeah, good thanks",
//       name: "Bernie",
//       timestamp: "1611975812976",
//       room: "SEI40"
//     },
//     {
//       message: "What ya doing?",
//       name: "Swaff-y",
//       timestamp: "1611975813463",
//       room: "SEI40"
//     },
//     {
//       message: "Ah, nothing",
//       name: "Bernie",
//       timestamp: "1611975814321",
//       room: "SEI40"
//     },
//     {
//       message: "Hey, how are ya",
//       name: "Swaff-y",
//       timestamp: "1611975812883",
//       room: "Hunting"
//     },
//     {
//       message: "Yeah, good thanks",
//       name: "Bernie",
//       timestamp: "1611975812976",
//       room: "Hunting"
//     },
//     {
//       message: "What ya doing?",
//       name: "Swaff-y",
//       timestamp: "1611975813463",
//       room: "Hunting"
//     },
//     {
//       message: "Ah, nothing",
//       name: "Bernie",
//       timestamp: "1611975814321",
//       room: "Hunting"
//     }
//   ],
//   (err, result) => {
//
//     if( err ) return console.log('Error adding messages', err);
//
//     console.log(`Success! Added ${ result.insertedCount } messages`);
//
//     printMessages();
//   });
// };
//
// const printMessages = () => {
//   db.collection('messagecontents').find().toArray( (err, messages) => {
//
//     if( err ) return console.log('Error finding messages', err);
//
//     console.log('Messages:', messages);
//
//     process.exit(0); // Finished! Quit the program with a success code
//
//
//   }); // find messages
// };


// MongoClient.connect(
//   'mongodb://127.0.0.1:27017/',
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err, client) => {
//
//     // Check for errors
//     if( err ){
//       console.log( 'Error connecting to MongoDB!', err );
//       process.exit( 1 ); // quit the program with a non-zero error code
//     } // error handling
//
//     db = client.db('ba');
//     console.log('Connected! Using db: "ba" ');
//
//     insertFlights();
//
//   }
// ); // connect
//
//
// const insertFlights = () => {
//
//   db.collection('flights').insertMany( [
//     {
//       flight_number: 'BA123',
//       origin: 'SYD',
//       destination: 'MEL',
//       departure_date: new Date('2021-10-01T04:20:00Z'),
//       airplane: { name: '737', rows: 10, cols: 4  },
//       reservations: [
//         { row: 1, col: 1, user_id: 10 },
//         { row: 2, col: 2, user_id: 10 },
//         { row: 3, col: 3, user_id: 11 },
//       ] // reservations
//     }, // first flight
//     {
//       flight_number: 'BA456',
//       origin: 'SYD',
//       destination: 'MEL',
//       departure_date: new Date('2021-11-01T04:20:00Z'),
//       airplane: { name: '767', rows: 12, cols: 6  },
//       reservations: [
//         { row: 1, col: 1, user_id: 10 },
//         { row: 2, col: 2, user_id: 10 },
//         { row: 3, col: 3, user_id: 11 },
//       ] // reservations
//     }, // first flight
//   ],
//   (err, result) => {
//
//     if( err ) return console.log('Error adding flights', err);
//
//     console.log(`Success! Added ${ result.insertedCount } flights`);
//
//     printFlights();
//
//
//   }); // insertMany
//
//
// }; // insertFlights
//
//
// const printFlights = () => {
//
//   // Flight.find();
//
//   db.collection('flights').find().toArray( (err, flights) => {
//
//     if( err ) return console.log('Error finding flights', err);
//
//     console.log('Flights:', flights);
//     debugger;
//     // pause in debugger: only works if you run this file
//     // through ndb: ./node_modules/.bin/ndb seeds-flights
//
//     process.exit(0); // Finished! Quit the program with a success code
//
//
//   }); // find flights
//
// }; // printFlights
