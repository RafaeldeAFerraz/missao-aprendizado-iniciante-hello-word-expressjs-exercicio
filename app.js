const express = require("express")
const app = express()

app.get("/", function (req, res) {
    res.send("Hello Express!")
})

app.get("/welcome", function (req, res) {
    res.send("Boas vindas à missão ExpressJS!")
})

app.get("/mission", function (req, res) {
    res.send("Esta é a missão de ExpressJS")
})

app.listen(3000, function () {
    console.log("Aplicação rodando em http://localhost:3000")
})