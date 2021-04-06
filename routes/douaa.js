const express = require("express");
const router = express.Router();
var db = require("../database/db.config")
app.use(express.json())
router.get("/",(req,res)=>{
    db.query("SELECT body FROM douaa", function (err, result) {
        id = result[0].video
       // console.log(id)
       let day = `
    اليوم السابع عشر
    `
    let douaa =result[0].body
   
    res.json({
        "day": day,
        "douaa" : douaa
    })
       
        if (err) throw err;
        console.log("1 record inserted");
      }); 
    
})

router.post("/:day",(req,res)=>{
    res.send("ok douaa added " + req.params.day )
})



module.exports = router;