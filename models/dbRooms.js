import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  name: { type : String , unique : true, required : true },
  participants: [
    {
      name: String
    }
  ]
}); //Schema

//collection
export default mongoose.model('roomcontents', RoomSchema)
