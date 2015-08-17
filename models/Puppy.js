var mongoose    = require('mongoose');
var User        = require('./User');

var PuppySchema = new mongoose.Schema({
  name: String,
  age: Number,
  therapy: Boolean,
  friendliness: String,
  hypoallerginc: Boolean,
  size: String,
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});


module.exports = mongoose.model('Puppy', PuppySchema);

