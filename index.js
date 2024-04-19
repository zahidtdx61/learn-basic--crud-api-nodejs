const express = require("express");
const { ServerConfig } = require("./config");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send({
    message: "Hello to User app",
  });
});

app.post("/add", (req, res) => {
  const {email, } = req.body;
})

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully running the app on PORT: ${ServerConfig.PORT}`);
});
