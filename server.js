let express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
let exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});



// db.on("error", console.error.bind(console, "connection error"));

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false  }));
app.use(express.json());
app.use(express.static("public"));

// handlebars
app.engine(
  "handlebars",
  exphbs({
      defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");


require("./routes/api.js")(app);
require("./routes/html.js")(app);

app.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});

module.exports = app;