const mongoose = require("./db")

const userSchmea = new mongoose.Schema({

    name: String,
    email: String,
    age: Number

})

module.exports = mongoose.model("User", userSchmea)