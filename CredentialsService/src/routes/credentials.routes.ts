module.exports = app => {
    const credentials = require("../controllers/credentials.controller.ts");

    //var router = require("express").Router();

    app.get("/login", credentials.return);     



}