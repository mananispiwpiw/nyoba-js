var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("<b>My</b> first express http server for simple API");
});

// Add route that will answers to all request type.
app
  .route("/task")
  .get(function (req, res) {
    res.send("Get the task");
  })
  .post(function (req, res) {
    res.send("Add an task");
  })
  .put(function (res, req) {
    res.send("Update the article");
  })
  .delete(function (res, req) {
    res.send("Delete the task");
  });

app.use(function (req, res) {
  res.status(404).send("Sorry, the route you're looking for is not exist.");
});

app.listen(3000, function () {
  console.log("Simple task API listening on port 3000:");
});
