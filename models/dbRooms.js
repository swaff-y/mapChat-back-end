import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  name: String,
  lastMessage: String,
  lastTimestamp: Number,
  participants: [
    {
      name: String,
      lastMessage: String
    }
  ]
}); //Schema

//collection
export default mongoose.model('roomcontents', RoomSchema)
