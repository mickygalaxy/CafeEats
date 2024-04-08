const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:     {type: String, require: true},
    email:    {type:String, required:true,unique:true},
    phone_no: {type:String, required:true,unique:true},
    password: {type:String, required:true},
    Wallet:   {type:Number, required:true},
    role:     {type: String, default: 'customer'}
},{timestamps:true})

module.exports = mongoose.model('User',userSchema);