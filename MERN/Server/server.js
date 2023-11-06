// create server here  :
const express = require("express");
const app = express();
app.use(express.json())
const cors = require("cors")
app.use(cors())

//connect to data base 
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aliassia995:7bA3BAoOQwEu3SiH@cluster0.5kywttw.mongodb.net/MERN_course_1?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, tls:true });

//import model
const UserModel = require('./Models/Users');

//server listening 
app.listen(3001, () => {
    console.log("Server Works!!");
});

//server handling the request for sending responses 
app.get("/", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.post("/add_user", async (req,  res)=>{
    const user =  req.body
    const newUser = UserModel(user)
    await newUser.save();
    res.json(user)

})
