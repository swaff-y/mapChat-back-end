import Messages from "../models/dbMessages.js";

const syncMessage = async (req,res) => {

  try{
    const messages = await Messages.find({
      room: req.params.room
    });
    console.log("The message: ", messages);
    res.json(messages);
  }catch(err){
    res.status(500).send(err);
  }
}

const newMessage = (req,res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err,data) => {
    if(err){
      res.status(500).send(err)
    }else{
      res.status(201).send(data)
    }
  })
} //new

export {syncMessage,newMessage};
