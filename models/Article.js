let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  link: {
    type: String,
    required: true
  }

});
var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;