const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Connected to MongoDB Atlas");
})

//Models
require("./Category");
require("./Recipe");