const express = require("express");
import {register} from '../controller/AuthController'
const registerRouter = express.Router();
registerRouter.use(express.json());
registerRouter.post('/',register)

module.exports=registerRouter