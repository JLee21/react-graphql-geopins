const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // we can avoid _id b/c it's automatically created
  name: String,
  email: String,
  picture: String
});

module.exports = mongoose.model("User", UserSchema);
