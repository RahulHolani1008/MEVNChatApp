const mongoose = require('mongoose'), Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  id : mongoose.Types.ObjectId,
  fullName: String,
  createdDate: { type: Date, default: Date.now },
  description: String,
  status: { type: Schema.Types.ObjectId, ref: 'Status' },
  rooms: [{ type: Schema.Types.ObjectId, ref: 'Status' }]
});

module.exports = mongoose.model('User', UserSchema);