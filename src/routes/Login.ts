const express = require("express");
import {login} from '../controller/AuthController'
const LoginRouter = express.Router();
LoginRouter.use(express.json());
LoginRouter.post('/',login)

module.exports=LoginRouter