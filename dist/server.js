import express from "express";
var app = express();
app.use(express.json());
app.listen(4000, function () {
    console.log("Listening on port 4000");
});
