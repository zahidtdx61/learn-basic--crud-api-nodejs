const { User } = require("./mongooseConfig");

const addUser = async ({ email, name, age, favFood }) => {
  await User.create({
    email,
    name,
    age,
    favFood,
  });
};

const removeUser = async (email) => {
  await User.deleteOne({ email });
};

const findUser = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

module.exports = {
  addUser,
  findUser,
  removeUser,
  ServerConfig: require("./serverConfig"),
};
