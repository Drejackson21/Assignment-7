const express = require('express');
// const ejs = require('ejs')
const bodyParser = require("body-parser");
const { uptime } = require('process');
const app = express();

const PORT = 3500;

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/bmicalculator.html")
})

app.post("/" , function (req, res) {
    var height= Number (req.body.hgt)
    var weight= Number (req.body.wgt)
    var result=  parseFloat(weight/(height**2)).toFixed(2)
    res.send("Your BMI is " + result)
        
})

app.listen(PORT, ()=> {
    console.log("listening on " + PORT);
})
