import express from "express";
// const express = require("express");

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    // console.log(`im in the middle`);
    // return res.send(`i have the power now`); // end mission

    console.log(`${req.method} ${req.url}`); // ${req.method} : what method which url > can know

    next(); // => req continue.. => middleware next fx
};

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send(`<h1>Not Allowed</h1>`);
    } // "/protected" >> cutting processing 
    console.log(`allowed, you may continue`);
    next();
}

const handleHome = (req, res) => {
    return res.send(`<h1>i love you</h1>`); // one of res end method
    // return res.end();
}; // finalware

const handleLogin = (req, res) => {
    return res.send("you login here");
};

const handleProtected = (req, res) => {
    return res.send(`welcome to the private lounge`);
}

app.use(logger); // important order!! first - use > next - get:url
// app > req : express => up ~ down loading..... > like a javascript
// order is very important!

app.use(privateMiddleware);

// app.get("/", gossipMiddleware, handleHome);

app.get("/", handleLogin);
app.get("/protected", handleProtected);

// request <> respon

const handleListening = () => console.log(`Server Listening on port 4000 http://localhost:${PORT}`);

app.listen(PORT, handleListening);

//v_js code

