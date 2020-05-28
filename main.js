const express = require("express");
const app = express();
let point = 0

app.get("/", function(req, res, next) {
  console.log("access!!!");
  if (point === 0) {
    res.json({ msg: "failed" })
  } else {
    res.json({ msg: "success"})
    point -= 1
  }
})

app.listen(3000, function() {
  console.log("started")
});

