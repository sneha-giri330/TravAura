const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
     type:String,
     required:true,
    }
    // username hashing salting password is implemented by  passport-local-mongoose automatically
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);