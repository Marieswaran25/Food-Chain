const express = require("express");
import { postfoodonHotels } from '../controller/Foodcontroller';
import {createHotel,getAllhotels} from '../controller/HotelController'
const hotelRouter=express.Router();
hotelRouter.use(express.json());
hotelRouter.post('/',createHotel)
hotelRouter.get('/',getAllhotels)
module.exports=hotelRouter

