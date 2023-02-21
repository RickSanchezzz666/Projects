const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser);

app.listen(8080, () => {
    console.log("Server was started on 8080 port.")
});