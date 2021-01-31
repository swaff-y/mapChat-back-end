import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  name: String,
  participants: [
    {
      name: String
    }
  ]
}); //Schema

//collection
export default mongoose.model('roomcontents', RoomSchema)
