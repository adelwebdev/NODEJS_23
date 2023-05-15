const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect("mongodb+srv://adelwebdev:MTUqzntzAaYCR1PO@clustermongo01.pfrevbv.mongodb.net/",console.log("Mongo connecté"))
    } catch(err){
        console.log(err);
        process.exit()
    }
}


module.exports = connectDB;

// process.env.MONGO_URI, () => console.log("Mongo connecté")