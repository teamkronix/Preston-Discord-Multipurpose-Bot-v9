const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Team Kronix | venom & snoww.");
});
app.listen(3000, () => {
  console.log("server has been started");
  console.log("Kronix Development");
});
