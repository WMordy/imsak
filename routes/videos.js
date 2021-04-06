var express = require("express")
var router = express.Router()
var db = require("../database/db.config")
app.use(express.json())
router.get("/",(req,res)=>{
    let link = "https://www.youtube.com/watch?v=ZQkBmCJG9i8"
    let id  = ""
    db.query("SELECT video FROM videos", function (err, result) {
        
        id = result[result.length -1].video
       // console.log(id)
        let final = "https://www.youtube.com/embed/" + id
        res.json({
            "link" : final
        })
        if (err) throw err;
        console.log("1 record inserted");
      }); 
    
    //let final = "https://www.youtube.com/embed/" + (link.split("/")[3]).split("=")[1]
   
})

router.post("/",(req,res)=>{
    //console.log(req.body)
    var link =  `'`+(req.body.video.split("/")[3]).split("=")[1] + `'`
    var sql = "INSERT INTO videos (video)  VALUES ( "+link+")";
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    }); 
    res.send(200)
})

router.put("/:day",(req,res)=>{
    res.send(req.params.day)
})

module.exports = router;