const express = require('express')
const cookieParser = require('cookie-parser')


const app = express()
app.use(express.json());

app.use(cookieParser())

//require all the api here

//using all the apis here

const authRouter = require('./routes/auth.routes');
app.use("/api/auth", authRouter)  
/*
    auth related jitni bhi api hone wali hai usko access karna hai to
    us api k aage prefix lagana padega "/api/auth"
*/


app.get("/", (req,res) => {
    res.send("Connection success")
})


module.exports = app;