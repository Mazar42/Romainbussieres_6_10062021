const mongoose = require('mongoose');

// Model for sauce
const thingSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name : { type: String, required: true },
  description: { type: String, required: true },
  mainPepper : { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat : { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes : { type: Number, required: true },
  usersLiked : { type: String, required: true },
  userdDisliked : { type: String, required: true },
    //those last two need to be string in array, need to check that up
});

module.exports = mongoose.model('Thing', thingSchema);