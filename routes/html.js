const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = (app) => {
    app.get("/", (req, res) => {
        db.Article.find({}).sort("-id").limit(50).then(data => {
            res.render("index" ,{
                Article: data
            });
        }).catch(err => console.log(err));
       
        
    });

    app.get("/scrape", (req, res) => {

        res.render("scrape");
    })
}