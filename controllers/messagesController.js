import Messages from "../models/dbMessages.js";
import Rooms from "../models/dbRooms.js";

const syncMessage = async (req,res) => {

  try{
    const messages = await Messages.find({
      room: req.params.room
    });
     console.log("The message*****: ", messages);
    res.json(messages);
  }catch(err){
    res.status(500).send(err);
  }
}

const newMessage = async (req,res) => {
  const dbMessage = req.body;
  const lastMessage =req.body.message;
  const lastTimestamp =req.body.timestamp;
  const room =req.body.room;

    console.log("I'm working",req.body.name);

  try{
    const rooms = await Rooms.update({name: room},{lastMessage: lastMessage, lastTimestamp: lastTimestamp});
    const roomsPart = await Rooms.updateOne(
      {name:room, "participants.name" : req.body.name},
      { $set:
        {
          "participants.$.lastMessage":lastMessage
        }
      });
    const message = await Messages.create(dbMessage);

    console.log("I was successful: ", rooms, roomsPart, message);
    res.json(message);
  }catch(err){
    res.status(500).send(err);
  }

} //new

export {syncMessage,newMessage};
