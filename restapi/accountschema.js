let mongoose = require("mongoose");
const  accountStructure = new mongoose.Schema({
    name : { type:String, required: true },
    mobile :  { type:String, required:true },
    email   :  { type:String, required: true},
    password :  { type:String, required: true},
    gender :  { type:String, required: true},
    city :  { type:String, required:true},
    state :  { type:String, required: true},
    source :  { type:String, required: true}
});



module.exports = mongoose.model("Accounts", accountStructure);
// it will create model(table) Employee with accountStructure 