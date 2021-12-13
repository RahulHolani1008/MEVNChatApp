const mongoose = require('mongoose'), Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const UserSchema = new mongoose.Schema({
  id : uuidv4(),
  fullName: String,
  createdDate: { type: Date, default: Date.now },
  description: String,
  status: { type: Schema.Types.ObjectId, ref: 'Status' }
});

module.exports = mongoose.model('User', UserSchema);