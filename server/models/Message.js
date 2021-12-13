const mongoose = require('mongoose'), Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const MesssageSchema = new mongoose.Schema({
  roomId : [{type: Schema.Types.ObjectId, ref: 'Room'}],
  id: uuidv4(),
  message: String,
  createdDate: { type: Date, default: Date.now },
  from: {type: Schema.Types.ObjectId, ref: 'User'},
  replyTo: {type: Schema.Types.ObjectId, ref: 'Message', default: null},
  seenBy: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Message', MesssageSchema);