const express = require('express');  // requires express module
const app = express(); // instance of express
const path = require('path');
cors = require('cors');
app.use(cors());


app.get("/",(req,res) => { //declare the route here
    res.send("defaut route is called");
})

app.get("/mannu",(req,res) => { //declare the route here
    console.log("api is called");
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    return res.json({
        "statusCode": 200,
        "statusMessage": "connected to backend successfully"
    });
})

app.use(express.static(path.join(__dirname,'.dist/my-first-project')));
app.listen(9090, function () { // listening 
    console.log("server runs at port: 9090");
});