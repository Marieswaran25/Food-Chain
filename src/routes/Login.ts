const express = require("express");
import {login,loginpage} from '../controller/AuthController'
const LoginRouter = express.Router();
LoginRouter.use(express.json());
LoginRouter.get('/',loginpage)
LoginRouter.post('/',login)

module.exports=LoginRouter