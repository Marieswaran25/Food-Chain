const express = require("express");
import { sendotp } from '../controller/otpcontroller'
const otpRouter = express.Router();
otpRouter.use(express.json());
otpRouter.post('/new',sendotp)

module.exports=otpRouter