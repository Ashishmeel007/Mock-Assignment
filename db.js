const mongoose = require("mongoose")
 require('dotenv').config();
 
const connection = mongoose.connect("mongodb+srv://ashish:meel@cluster0.3tukwza.mongodb.net/mock4assignmet?retryWrites=true&w=majority");

module.exports = {
    connection
}