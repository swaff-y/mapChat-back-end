import mongoose from 'mongoose';

const mapChatSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean
});

//collection
export default mongoose.model('messagecontents', mapChatSchema)
