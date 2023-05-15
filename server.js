const express = require("express");
// const { connect } = require("mongoose");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config()
const port = 5500;

connectDB(); 

const app = express();


// get => c donne moi les donnees
// app.get("/post", (req, res) => {
//     res.json({ message: "voici les données" });
// });
// app.post
// app.put

//middleware pr traiter les data de la request
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/post", require("./routes/post.routes"))


// pr lancer le server  
app.listen(port, () => console.log("Le server a bien demarre au port: " + port))
  