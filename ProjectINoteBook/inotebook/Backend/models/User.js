const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,

  },
  password: {
    type: String,
    required: true,
   },
});



const Userunique = mongoose.model("user", UserSchema);
Userunique.createIndexes();
module.exports = Userunique;
