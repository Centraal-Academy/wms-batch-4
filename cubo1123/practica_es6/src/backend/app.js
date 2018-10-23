import express from "express"
import cors from "cors"
var app = express();
import heroes from "./controllers/superheroes"
app.use(cors())

app.use('/heroes', heroes)

var server = app.listen(8080, function () {
    console.log('Server is running...')
});

module.exports = app;