const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my first app running ");
});

app.get("/me", (req, res) => {
  res.send("Hi I am wisam saleem abdullah ");
});

app.listen(5000, () => {
  console.log("listening");
});
