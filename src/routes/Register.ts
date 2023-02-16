const express = require("express");
import {register,showsignup} from '../controller/AuthController'
const registerRouter = express.Router();
registerRouter.use(express.json());
registerRouter.get('/',showsignup)
registerRouter.post('/',register)

module.exports=registerRouter