const express = require("express");
const {
  ServerConfig,
  addUser,
  findUser,
  removeUser,
  updateUser,
} = require("./config");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send({
    message: "Hello to User app",
  });
});

app.post("/add", async (req, res) => {
  try {
    const { email, name, age, favFood } = req.body;
    const user = { email, name, age, favFood };

    await addUser(user);
    console.log("User added successfully");
    return res.send({
      message: "New user added successfully",
      user,
    });
  } catch (error) {
    console.log("Can't  add new user. Something went wrong!!!");
    return res.send({
      message: "Something went wrong.",
    });
  }
});

app.get("/find", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await findUser(email);
    if (user) {
      console.log("User found.", user);
      return res.send({
        message: "Found user successfully",
        user,
      });
    } else {
      console.log("User not found", user);
      return res.send({
        message: "User Not Found!!!",
      });
    }
  } catch (error) {
    console.log("Can't find user. Something went wrong!!!");
    return res.send({
      message: "Something went wrong.",
    });
  }
});

app.put("/update", async (req, res) => {
  try {
    const { email, name, age, favFood } = req.body;
    const user = {
      email,
      name,
      age,
      favFood,
    };

    const updatedUser = await updateUser(user);
    console.log("User updated successfully", updatedUser);

    return res.send({
      message: "User updated successfully",
      updatedUser,
    });
  } catch (error) {
    console.log("Can't  update user. Something went wrong!!!");
    return res.send({
      message: "Something went wrong.",
    });
  }
});

app.delete("/delete", async (req, res) => {
  try {
    const { email } = req.body;

    await removeUser(email);
    console.log("User deleted successfully.");

    return res.send({
      message: "User removed successfully",
    });
  } catch (error) {
    console.log("Can't  delete new user. Something went wrong!!!");
    return res.send({
      message: "Can't delete. Something went wrong",
    });
  }
});

app.use((req, res) => {
  return res.send({
    message: "From global something went wrong!!!",
  });
});

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully running the app on PORT: ${ServerConfig.PORT}`);
});
