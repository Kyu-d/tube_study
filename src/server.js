import express from "express";
// const express = require("express");

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send(`<h1>i love you</h1>`); // one of res end method
};

const handleLogin = (req, res) => {
    return res.send("you login here");
};

app.get("/", handleHome);

app.get("/login", handleLogin);

// request <> respon

const handleListening = () => console.log(`Server Listening on port 4000 http://localhost:${PORT}`);

app.listen(PORT, handleListening);

//v_js code

