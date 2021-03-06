import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  room: String,
  latitude: Number,
  longitude: Number
}); //Schema

//collection
export default mongoose.model('messagecontents', MessageSchema)
