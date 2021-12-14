const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb+srv://RahulHolani:Genesis%401234$@cluster0.xpvk4.mongodb.net/MEVNChatApp?retryWrites=true&w=majority')
  .then(() =>  console.info('DB Connection Sucessful'))
  .catch((err) => console.error(err));

module.exports = mongoose;