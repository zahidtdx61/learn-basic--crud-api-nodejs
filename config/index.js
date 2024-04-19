const { User } = require("./mongooseConfig");

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

module.exports = {
  addUser,
  findUser,
  removeUser,
  ServerConfig: require("./serverConfig"),
};
