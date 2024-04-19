const { addUser, findUser, removeUser, updateUser, findAllUser } = require("./mongooseConfig");

module.exports = {
  addUser,
  findUser,
  removeUser,
  updateUser,
  findAllUser,
  ServerConfig: require("./serverConfig"),
};
