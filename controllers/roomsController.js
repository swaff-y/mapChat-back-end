import Rooms from "../models/dbRooms.js";

const syncRoom = async (req,res) => {


  try{
    const rooms = await Rooms.find({"participants.name" : req.params.user });
    res.json(rooms);
  }catch(err){
    res.status(500).send(err);
  }
}

const getRoom = async (req,res) => {

  try{
    const room = await Rooms.findOne({name:req.params.name});
    res.json(room);
  }catch(err){
    res.status(500).send(err);
  }
}


export {syncRoom,getRoom};
