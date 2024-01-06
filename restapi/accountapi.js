const express = require("express");
const router = express.Router();
module.exports = router;

// import  fromaccountschema(structure)
const User_acnt = require("./accountschema");

//client file interact with server1.js(node file), server1.js send data to empapi.js 
// empapi.js send data to mongo dp with importing structure from empschema.js

// post related query handeld by it
router.post("/", async(req,res) =>{
  let acntinfo = new User_acnt({
       name: req.body.uname,
       mobile : req.body.umobile,
       email : req.body.uemail,
       password : req.body.upassword,
       gender : req.body.ugender,
       city : req.body.ucity,
       state : req.body.ustate,
       source : req.body.usource
  })

 
  
   let acntdata = await acntinfo.save(); //insert new employee
   res.status(201).json(acntdata);// 200 only for aknowledgement that i received data while 201 is aknowledgement with some data

});

//fetch all
router.get("/", async(req, res) =>{
    let userlist = await User_acnt.find();
    if(userlist == null){
        res.status(201).json({"message": "No Records in Database !"});
    }
    else{
        res.status(201).json(userlist);
    }
})


