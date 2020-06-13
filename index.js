const express = require('express');
const bodyParser = require('body-parser');
const tasks = require("./routes/tasks");
const cors =require("cors");
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         credentials : true
//     })
// );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api",tasks);

if(process.env.NODE_ENV === 'production'){
    app.use('/',express.static('frontend/build'));
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));     
    });
}

app.listen(port,() => {
    console.log(`Connected at port: ${port}`);
});
