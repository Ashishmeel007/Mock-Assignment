const jwt = require('jsonwebtoken');

const auth = (req,res,next) =>{
    const token = req.headers.authorization?.split(' ')[1];
    if(token){
        try{
            const decoded = jwt.verify(token,"meel");
            if(decoded){
                req.body.userID = decoded.userID;
                req.body.user = decoded.user;
                next()
            }else {
                res.json({msg:"Not Authorized!!"})
            }
        } catch(err){
            res.json({error:err.message})
        };
    }else{
        res.json({mag:"Please Login!"})
    }
};

module.exports ={
    auth
}