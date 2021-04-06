express = require("express")
const path = require("path");
app = express()
PORT = 26990

app.use(express.static(path.join(__dirname, "/public")));

app.use("/date",require("./routes/dates"))

app.use("/video",require("./routes/videos"))
app.use("/sallaa",require("./routes/sallaa"))
app.use("/douaa",require("./routes/douaa"))


app.listen(PORT,()=>{
    console.log("server on At "+PORT)
})