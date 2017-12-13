var express = require("express");

var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.listen(3000, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("server started......");
    }
});