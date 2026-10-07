const jwt = require('jsonwebtoken')

function authUser(req, res, next){
    const token = req.cookies.token
    //we cant identify the user without token, which user has created request

    if(!token){
        return res.status(400).json({
            message: "Token not provided"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded

        next() 
    }catch(err) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
    
    module.exports = { authUser }
    
}