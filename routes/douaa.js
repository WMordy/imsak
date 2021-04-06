const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    let day = `
    اليوم السابع عشر
    `
    let douaa =`اللهم اجعلْ في قلبي نورًا، وفي سمعي نورًا، وعن يميني نورًا، وعن يساري نورًا، وفوقي نورًا، وتحتي نورًا، وأمامي نورًا، وخلفي نورًا، وأعظِمْ لي نورًا اللهم اجعلْ لي نورًا في قلبي، واجعلْ لي نورًا في سمعي، واجعلْ لي نورًا في بصري، واجعلْ لي نورًا عن يميني، ونورًا عن شمالي، واجعلْ لي نورًا من بين يديَّ، ونورًا من خلفي، وزِدْني نورًا، وزِدْني نورًا، وزِدْني نورًا

   `
    res.json({
        "day": day,
        "douaa" : douaa
    })
})

router.post("/:day",(req,res)=>{
    res.send("ok douaa added " + req.params.day )
})



module.exports = router;