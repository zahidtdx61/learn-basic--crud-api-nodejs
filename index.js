const express = require("express");
const { ServerConfig, addUser, findUser } = require("./config");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send({
    message: "Hello to User app",
  });
});

app.post("/add", (req, res) => {
  const { email, name, age, favFood } = req.body;
  const user = { email, name, age, favFood };

  try {
    addUser(user);
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

app.get("/find", (req, res) => {
  const { email } = req.body;
  try {
    const user = findUser(email);
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
    console.log("Can't  add new user. Something went wrong!!!");
    return res.send({
      message: "Something went wrong.",
    });
  }
});

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully running the app on PORT: ${ServerConfig.PORT}`);
});
