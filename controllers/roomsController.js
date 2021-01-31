import Rooms from "../models/dbRooms.js";

const syncRoom = async (req,res) => {
  try{
    const rooms = await Rooms.find();
    res.json(rooms);
  }catch(err){
    res.status(500).send(err);
  }
}

export {syncRoom};
