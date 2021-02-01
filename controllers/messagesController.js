import Messages from "../models/dbMessages.js";
import Rooms from "../models/dbRooms.js";

const syncMessage = async (req,res) => {

  try{
    const messages = await Messages.find({
      room: req.params.room
    });
    // console.log("The message: ", messages);
    res.json(messages);
  }catch(err){
    res.status(500).send(err);
  }
}

const newMessage = (req,res) => {
  const dbMessage = req.body;
  const lastMessage =req.body.message;
  const room =req.body.room;

  // console.log("I'm working");

  Rooms.update({room: room},{lastMessage: lastMessage});

  Messages.create(dbMessage, (err,data) => {
    if(err){
      res.status(500).send(err)
      // console.log("An error Happened");
    }else{
      res.status(201).send(data)
    }
  });

} //new

export {syncMessage,newMessage};
