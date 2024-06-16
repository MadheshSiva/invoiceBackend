const mongoose = require("mongoose")

exports.connection = async() => {

try{
   await mongoose.connect("mongodb+srv://madheshsiva28:dY8Gd4uw80Iv5xn4@cluster0.zwxxumr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   console.log("mongoDB connected")
}catch(err) {

}

}