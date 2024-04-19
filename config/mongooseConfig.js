const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoDbUrl = process.env.MONGO_URL;

mongoose.connect(mongoDbUrl);

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  age: Number,
  favFood: String,
});

const User = mongoose.model("My_table", UserSchema);

module.exports = {
  User,
};
