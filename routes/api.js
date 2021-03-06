const db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");


module.exports = app => {

    app.get("/api/scrape", (req, res) => {
        axios.get("https://www.nbc12.com/news/richmond/").then(response => {

            var $ = cheerio.load(response.data);

            $("a.unstyled-link").each((i, element) => {

                let obj = {};
                let title = "https://www.nbc12.com";
                title += $(element).attr("href");
                obj.link = title;

                obj.title = $(element).parent("h4").text().trim();

                if (obj.link && obj.title) {

                    db.Article.create(obj).then(function (art) {
                        console.log(`----____Article Added!___----`);
                        console.log(art);
                    }).catch(function (err) { console.log(err); });
                }
            });

        });
        res.redirect("/")

    });

    // finds article by ID number, sends back that data to the front end.
    app.get("/scrape/:id", (req, res) => {
        db.Article.findOne({ _id: req.params.id }).then(resp => {

            axios.get(resp.link).then(response => {
                var $ = cheerio.load(response.data);
                var arr = []
                $("div .card-content").each((i, element) => {
                    arr.push($(element).text().trim());
                });
                res.json(arr);
            })


        }).catch(err => {
            console.log(err);
        })
    })

}