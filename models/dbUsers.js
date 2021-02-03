import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  number: Number,
  email: String,
  lastRoom: String
}); //Schema

//collection
export default mongoose.model('usercontents', UserSchema)
