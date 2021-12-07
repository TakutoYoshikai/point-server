const express = require("express");
const app = express();
let point = parseInt(process.argv[2]);

app.get("/", function(req, res, next) {
  if (point <= 0) {
    console.log("failed!!!");
    res.json({ msg: "failed" })
  } else {
    console.log("success!!!");
    res.json({ msg: "success"})
    point -= 1
  }
})

app.listen(3000, function() {
  console.log("started")
});

