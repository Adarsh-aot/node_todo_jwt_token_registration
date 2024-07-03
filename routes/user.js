const express = require('express')
const router = express.Router()
const getdata = require('../helper/helper')
const { register_validation, login_validator } = require('../middleware/validation')





router.post('/',login_validator,getdata.login)
router.post('/register',register_validation,getdata.register)


module.exports = router