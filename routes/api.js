const db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");
let count = 0;

module.exports = app => {

    app.get("/scrape", (req, res) => {
       count = 0;
        axios.get("https://www.nbc12.com/news/richmond/").then(response => {
            var $ = cheerio.load(response.data);
            
            

            $("a.unstyled-link").each((i, element) => {
               
                let obj = {};
                let title = "https://www.nbc12.com";
                title += $(element).attr("href");
                obj.link = title;

                obj.title = $(element).parent("h4").text().trim();

                if (obj.link && obj.title) {
                    count++;
                    arts.push(obj);
                    db.Article.create(obj).then(function(art) {
                        console.log(`----____Article Added!___----`);
                        // console.log(art);
                    }).catch(function(err) { console.log(err); });
                }
            });
            console.log(count);
          
        });

        db.Article.find({}).sort("id").limit(count).then(data => {
            res.render("index", {
                Article: data
            })
        })
       

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