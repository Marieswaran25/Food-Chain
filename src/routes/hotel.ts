const express = require("express");
import {createHotel} from '../controller/HotelController'
const hotelRouter=express.Router();
hotelRouter.use(express.json());
hotelRouter.post('/',createHotel)
module.exports=hotelRouter

