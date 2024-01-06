let mongoose = require("mongoose");
const userstructure =  new mongoose.Schema({
    name:   {type:String, required:true},
    email:  { type:String, required:true},
    mobile:    { type:String, required:true},
    date: {type:String, required:true}
});

module.exports = mongoose.model("users", userstructure);