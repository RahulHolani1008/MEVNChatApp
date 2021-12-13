const mongoose = require('mongoose'), Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const RoomSchema = new mongoose.Schema({
  id : uuidv4(),
  name: String,
  createdDate: { type: Date, default: Date.now },
  participants: [{type: Schema.Types.ObjectId, ref: 'User'}],
  description: String
});

module.exports = mongoose.model('Room', RoomSchema);