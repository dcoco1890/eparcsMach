let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var ArticleSchema = new Schema({

    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]


});
var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;