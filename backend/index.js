const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todo", function (req, res) {});

app.get("/todos", function (req, res) {});
app.put("/completed", function (req, res) {});

app.listen(3000, function () {
  console.log("Listening at " + port);
});