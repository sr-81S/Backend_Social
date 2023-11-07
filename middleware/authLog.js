const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");


const authlog = async(req, res, next)=>{
    try {
        const token = req.headers['authorization']

        const verifyToken = jwt.verify(token, process.env.SECRATE);

        console.log("token after verified  =  ");
        console.log(verifyToken );

        // const correctUser = await User.findById({_id : verifyToken._id});

        // console.log(correctUser);

        // if(!verifyToken && !correctUser){
        //     throw new Error("user not found");
        // }

        req.user = verifyToken;

        next()

    } catch (error) {
        res.status(401).send("un authorise user")
        console.log(error);
    }
}



module.exports = authlog