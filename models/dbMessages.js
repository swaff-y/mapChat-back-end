import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  message: String,
  name: String,
  timestamp: Number,
  user: String,
  room: String
}); //Schema

//collection
export default mongoose.model('messagecontents', MessageSchema)
