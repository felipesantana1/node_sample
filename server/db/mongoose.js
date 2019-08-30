//Connect DB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/node_test", { useNewUrlParser: true });

//Create User Schema
const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    website: { type: String, required: true },
}, { timestamps: true });

mongoose.model("User", UserSchema);