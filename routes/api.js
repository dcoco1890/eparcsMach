const db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

module.exports = app => {

    app.get("/scrape", (req, res) => {
        axios.get("https://www.nbc12.com/news/richmond/").then(response => {
            var $ = cheerio.load(response.data);

            $("a.unstyled-link").each((i, element) => {

                var resluts = {};
                let title = "https://www.nbc12.com/";
                title += $(element).attr("href");
                resluts.link = title;

                resluts.title = $(element).parent("h4").text();

                db.Article.create(resluts).then(function(art) {
                    console.log(art);
                }).catch(function(err) {
                    console.log(err);
                });

            });


            console.log(resluts);

        });
        res.send("sca");

    })
}