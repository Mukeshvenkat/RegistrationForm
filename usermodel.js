const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = require('./mongodb');

let userSchema = new Schema({
    userName: { type: String, required: true , trim: true, unique: true },
    emailId: { type: String, match: /\S+@\S+\.\S+/, required: true },
    password: { type :String, required: true },
    contact: { type: Number, required: true },
    location: { type: String, required: true },
    createdOn: { type: Date }
});

let usersModel = db.model('users', userSchema);

module.exports = usersModel;