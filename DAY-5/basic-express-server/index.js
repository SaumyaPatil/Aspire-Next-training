const express = require("express");

const app = express();

// REST APIs - routing
app.get("/", (req, res) => {
  return res.send("Hello From Home Page");
});

app.get("/about", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

app.listen(8000, () => console.log("Server Started!"));
