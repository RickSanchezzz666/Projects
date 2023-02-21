const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()
const { Comments } = require('./models/comments')


console.log(`MONGO_DB_URI:${process.env.MONGO_DB_URI}`)
console.log(`PORT:${process.env.PORT}`)

const Mongo = require('./setup/mongoose')

const app = express();
app.use(bodyParser.json());

const setup = async () => {
    await Mongo.setupDb(process.env.MONGO_DB_URI);

    app.post("/comments", async (req, res) => {
        const { name, email, text } = req.body;

        const doc = new Comments({
            name, email, text, date: new Date()
        });

        const elem = await doc.save()

        return res.status(200).send(elem);
    });

    app.get("/comments", async (req, res) => {
        const docs = await Comments.find().limit(20);
        return res.status(200).send(docs);
    });

    app.listen(process.env.PORT, () => {
        console.log("Server was started on 8080 port.")
    });
}

setup();