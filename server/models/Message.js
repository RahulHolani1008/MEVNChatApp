const mongoose = require('mongoose'), Schema = mongoose.Schema;

const MesssageSchema = new mongoose.Schema({
  roomId : [{type: Schema.Types.ObjectId, ref: 'Room'}],
  id: mongoose.Types.ObjectId,
  message: String,
  createdDate: { type: Date, default: Date.now },
  from: {type: Schema.Types.ObjectId, ref: 'User'},
  replyTo: {type: Schema.Types.ObjectId, ref: 'Message', default: null},
  seenBy: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Message', MesssageSchema);