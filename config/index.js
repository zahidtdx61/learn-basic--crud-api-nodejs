const { User } = require("./mongooseConfig");

const addUser = async ({ email, name, age, favFood }) => {
  try {
    await User.create({
      email,
      name,
      age,
      favFood,
    });
  } catch (error) {
    console.log(error);
  }
};

const removeUser = async (email) => {
  try {
    await User.deleteOne({ email });
    console.log("User deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addUser,
  removeUser,
};
