const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },
    picture:{
        type:String,
    }
})

// before the data save into the database it encript the password and save into thhe database
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
})

// genetate token function 

userSchema.methods.generateToken = async function(){
    let token = jwt.sign({_id: this._id}, process.env.SECRATE);
    return token;
}


const User = mongoose.model('User',userSchema);

module.exports = User