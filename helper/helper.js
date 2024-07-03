const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid');
const { secretkey } = require('../constant/secret')
const { data } = require('../constant/global_data_storage')
const { todo } = require('../constant/global_data_storage')



function extractNumbersFromUUID(uuid) {
    return uuid.replace(/\D/g, '');
  }

const secret_key = secretkey
const login = (req, res) =>  {
    const {username, password} = req.body
        const array_index = req.array_index
        console.log(data[array_index].id)
        
        const token = jwt.sign({username : username , id : data[array_index].id  }, secret_key )
        res.json({token})
    
}



const register = (req, res) =>  {
    const {username, password ,  email , phone , fullname } = req.body
    const  id = extractNumbersFromUUID(uuidv4())
    data.push({ id : id , name : username , password : password , fullname : fullname , email : email , phone : phone})
    const token = jwt.sign({username : username , id : id  }, secret_key )
    res.json({token})
}




const adddata = (req, res) => {
    const name = req.body.name;

    
        const decode = req.decode
        console.log(decode);

        if (todo.hasOwnProperty(decode.id)) {
            todo[decode.id].push({ id : extractNumbersFromUUID(uuidv4()) , task: name });
            res.json({ todo: todo[decode.id] });
        } else {
            todo[decode.id] = [{ id : extractNumbersFromUUID(uuidv4()) , task: name }];
            res.json({ todo: todo[decode.id] });
        
        }
};

const data_value = (req, res) => {
    
    const decode = req.decode
    console.log(decode);
    if(todo.hasOwnProperty(decode.id)){
        
    res.json(todo[decode.id] );
    }
    else{
        res.json({todo : []});
    }
};


module.exports = {
    login , 
    register,
    adddata ,
    data_value , 
    secretkey ,
    data
}



