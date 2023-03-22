const express = require("express");
import {createHotel,getAllhotels} from '../controller/HotelController'
const hotelRouter=express.Router();
hotelRouter.use(express.json());
hotelRouter.post('/',createHotel)
hotelRouter.get('/',getAllhotels)
module.exports=hotelRouter

