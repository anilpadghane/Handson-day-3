const express = require('express');

const app = express();

const middlewareOne = (req,res,next) => {
    console.log("first One");
    next();
}

const middlewareTwo = (req,res,next) => {
    console.log("Second one");
    next();
}

app.get('/',(req,res) =>{
    res.send("Hello Node!!");
})

app.get('/About',(req,res) => {
    res.send("Hi Node js!! THIS IS ABOUT PAGE!!");
})

app.get("/contact",middlewareTwo,(req,res) => {
    res.send("THIS IS CONATCT  PAGE");
})

app.get("/home",middlewareTwo,(req,res) => {
    res.send("THIS IS HOME !! WELCOME !!");
})

app.listen(7001,() => {
    console.log("Cnnecting...");
})