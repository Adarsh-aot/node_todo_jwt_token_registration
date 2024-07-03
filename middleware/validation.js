const jwt = require('jsonwebtoken')
const { secretkey, data } = require('../helper/helper')



const jwt_token_validatotion = (req, res, next) => {

    try {   
        const decode = jwt.verify(req.headers.authorization, secretkey);
        console.log(decode);
        req.decode = decode
        next()
    } catch (error) {
        // Handle invalid token error
        
        res.status(401).json({ message: 'invalid token' });
        
        
    }
}


const register_validation = (req, res, next) => {
    const {username} = req.body
    const array_index = data.findIndex(user => user.name === username)
    if(array_index == -1){
        next()
    }
    else{
        res.json({message : "user already exists"})
    }

}



const login_validator = (req, res, next) => {
    const {username, password} = req.body
    
    const array_index = data.findIndex(user => user.name === username && user.password === password)
    if(array_index == -1){
        res.status(404).json({message : "invalid credentials"})
    }
    else{   
        req.array_index = array_index
        next()
    }
}

module.exports = {
    jwt_token_validatotion  ,
    register_validation , 
    login_validator
}