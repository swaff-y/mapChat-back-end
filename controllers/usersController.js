import User from "../models/dbUsers.js";

const syncUsers = async (req,res) => {

  try{
    const users = await User.find();
     // console.log("The message: ", messages);
    res.json(users);
  }catch(err){
    res.status(500).send(err);
  }
};

// const newMessage = async (req,res) => {
//   const dbMessage = req.body;
//   const lastMessage =req.body.message;
//   const room =req.body.room;
//
//     console.log("I'm working",req.body.name);
//
//   try{
//     const rooms = await Rooms.update({name: room},{lastMessage: lastMessage});
//     const roomsPart = await Rooms.updateOne(
//       {name:room, "participants.name" : req.body.name},
//       { $set:
//         {
//           "participants.$.lastMessage":lastMessage
//         }
//       });
//     const message = await Messages.create(dbMessage);
//
//     console.log("I was successful: ", rooms, roomsPart, message);
//     res.json(message);
//   }catch(err){
//     res.status(500).send(err);
//   }
//} //new

export {syncUsers};
