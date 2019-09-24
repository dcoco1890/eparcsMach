let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var WeatherSchema = new Schema({

    hour: {
        type: String,
        required: true
    },
    temp: {
        type: Number,
        required: true
    }

});
var Weather = mongoose.model("Weather", ArticleSchema);
module.exports = Weather;