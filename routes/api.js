const db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

module.exports = app => {

    app.get('/', function(req, res) {
        res.render("index");
    });
}