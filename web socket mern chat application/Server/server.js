//import express library
const express =  require("express")

//import cors library
const cors =  require("cors")

const userRoute =  require("./Routes/userRoute")

//create the server 
const app = express()
require("dotenv").config() // config .env

//setup the server 
app.use(express.json())
app.use(cors())
app.use("/api/users", userRoute)
//app routing 
//app.post // for insert or create data in db
app.get("/",(req, res)=>{
    res.send("<h1>welcome our chat application APIs...</h1>")
});


// running the server at a port 
const port =  process.env.PORT || 5000 ;
app.listen(port, (req,  res)=>{
console.log(`Server running on port : ${port}`);
})

//connect to mongoDB 
const mongoose = require("mongoose") // import mongoose library
const uri = process.env.ATLAS_URI ;
mongoose.connect(uri,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=> console.log("mongoDB connection established"))
.catch((error) => console.log("connection failed", error.message));

const chatRoute =  require("./Routes/chatRouter")
app.use("/api/chats", chatRoute)
const messageRoute =  require("./Routes/messagesRouter")
app.use("/api/messages", messageRoute)


