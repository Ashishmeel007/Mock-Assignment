const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://ashish:meel@cluster0.3tukwza.mongodb.net/mock4assignment?retryWrites=true&w=majority");

module.exports = {
    connection
}