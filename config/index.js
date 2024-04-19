const { addUser, findUser, removeUser, updateUser } = require("./mongooseConfig");

module.exports = {
  addUser,
  findUser,
  removeUser,
  updateUser,
  ServerConfig: require("./serverConfig"),
};
