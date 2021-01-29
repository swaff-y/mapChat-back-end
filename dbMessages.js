import mongoose from 'mongoose';

const mapChatSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean
});

export default mongoose.model('messageContent', mapChatSchema)
