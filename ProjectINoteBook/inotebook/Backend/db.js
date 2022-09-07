const mongoose = require("mongoose");
const mangooseUri = "mongodb://localhost:27017/iNote";
const connectToMongo = () => {
  mongoose.connect(mangooseUri, () => {
    console.log("Working Done");
  });
};
module.exports = connectToMongo;
