//express downloading code
const express = require("express");
const app = express();

// use cross origin for frontend-backend communication
const cors = require("cors"); // calling cross origin library
app.use(cors()); // creating object of cors library
app.use(express.json());

//database connection code start
const mongoose = require("mongoose");// importing mongodb compiler
mongoose.connect("mongodb://127.0.0.1:27017/mindful_assignment", {useNewUrlParser:true});
//passing the url of database 
// use ip address instead of domain name localhost:27017

const db = mongoose.connection; //connection to db
db.on("error", (error)=> console.log( error )); // if error than show error
db.on("open", ()=> console.log(" Database Connected... ")); // otherwise show Database Connected
// database connection code end

const accountapi = require("./accountapi");
app.use("/account", accountapi);  


const manageuser = require("./userapi");
app.use("/user", manageuser); 

app.listen(3333, () => console.log("The server is live now...."));

