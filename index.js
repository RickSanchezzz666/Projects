const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()


console.log(`MONGO_DB_URI:${process.env.MONGO_DB_URI}`)
console.log(`PORT:${process.env.PORT}`)

const Mongo = require('./setup/mongoose')

const app = express();
app.use(bodyParser);

const setup = async () => {
    await Mongo.setupDb(process.env.MONGO_DB_URI);
    app.listen(process.env.PORT, () => {
        console.log("Server was started on 8080 port.")
    });
}

setup();