const express = require("express");
require('dotenv').config();
const app = express();
const port = 8000;
app.use(express.json(),express.urlencoded({extended:true}));//for POST
const cors = require("cors");
app.use(cors());

// app.get("/api/test",(req,res)=>{
//     res.json({
//         message:"it's working!!"
//     })
// })
require("./config/mongoose.config");
require("./routes/joke.routes")(app);

app.listen(port,()=>console.log(`running on port ${port}!!!!!`));