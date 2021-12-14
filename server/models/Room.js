const mongoose = require('mongoose'), Schema = mongoose.Schema;

const RoomSchema = new mongoose.Schema({
  id : mongoose.Types.ObjectId,
  name: String,
  createdDate: { type: Date, default: Date.now },
  participants: [{type: Schema.Types.ObjectId, ref: 'User'}],
  description: String,
  public: { type: Boolean, default: false }
});

module.exports = mongoose.model('Room', RoomSchema);