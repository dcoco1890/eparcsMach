let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var NoteSchema = new Schema({

    body: {
        type: String
    }

});
var Note = mongoose.model("Note", NoteSchema);
module.exports = Note;