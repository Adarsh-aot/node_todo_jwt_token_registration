const express = require('express')
const router = express.Router()
const getdata = require('../helper/helper')
const { jwt_token_validatotion } = require('../middleware/validation')




router.get('/',jwt_token_validatotion,getdata.data_value)
router.post('/',jwt_token_validatotion,getdata.adddata)




module.exports = router