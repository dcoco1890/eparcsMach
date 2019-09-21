const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("index");
    });

    app.get("/scrape", (req, res) => {
        axios.get("https://www.nbc12.com/news/richmond/").then( response => {
            var $ = cheerio.load(response.data);
           
            $("a.unstyled-link").each( (i, element) => {
                
                let title = "https://www.nbc12.com/";
                title += $(element).attr("href");
                var resluts = {};
                resluts.link = title;

                db.Article.create(resluts).then(function(art){
                    console.log(art);
                }).catch(function(err){
                    console.log(err);
                });
                
            });
            

           console.log(resluts);

        });
        res.send("sca");

    })
}