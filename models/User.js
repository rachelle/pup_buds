var mongoose              = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Puppy                 = require('./Puppy');





var UserSchema = new mongoose.Schema({
  owner: Boolean,
  name: String,
  age: Number,
  email: String,
  kids: Boolean,
  zipCode: String,
  bio: String,
  picture: String,
  puppies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Puppy'
  }]
});

UserSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', UserSchema);
