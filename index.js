var express = require('express');
var bodyParser = require('body-parser');
var tasks = require("./routes/tasks");
const cors =require("cors");

const app = express();

const port = 5000;

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials : true
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api",tasks);

app.listen(port,() => {
    console.log(`Connected at port: ${port}`);
});