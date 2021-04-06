const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("sallaa times")
})



module.exports = router;