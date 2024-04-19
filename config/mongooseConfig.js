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

const addUser = ({ email, name, age, favFood }) => {
  return User.create({
    email,
    name,
    age,
    favFood,
  });
};

const removeUser = (email) => {
  return User.deleteOne({ email });
};

const findUser = (email) => {
  return User.findOne({ email });
};

const updateUser = ({ email, name, age, favFood }) => {
  return User.updateOne(
    { email },
    {
      email,
      name,
      age,
      favFood,
    }
  );
};

const findAllUser = () => {
  return User.find({});
};

const database = {
  addUser,
  removeUser,
  findUser,
  updateUser,
  findAllUser,
};

module.exports = database;
