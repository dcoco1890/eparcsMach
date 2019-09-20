let express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
let exphbs = require("express-handlebars");

var axios = require("axios");
var cheerio = require("cheerio");

const PORT = process.env.PORT || 8080;

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));


const app = express();


app.use(logger("dev"));
app.use(express.urlencoded({ extended: false  }));
app.use(express.json());
app.use(express.static("public"));

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

app.get('/', function(req, res) {
    res.render("index");
})
app.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});