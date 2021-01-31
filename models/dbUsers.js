import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  number: Number,
  email: String
}); //Schema

//collection
export default mongoose.model('usercontents', UserSchema)
