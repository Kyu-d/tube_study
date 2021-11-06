import express from "express";
// const express = require("express");

const PORT = 4000;

const app = express();

// request <> respon

const handleListening = () => console.log(`Server Listening on port 4000 http://localhost:${PORT}`);

app.listen(PORT, handleListening);

