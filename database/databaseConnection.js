const mongoose = require("mongoose")


async function connectToDb(){
   await mongoose.connect("mongodb+srv://basnetmanish089:acesdharan@cluster0.qrpac8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   console.log("Database connected")
}

module.exports = connectToDb