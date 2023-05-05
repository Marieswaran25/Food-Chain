import { getfoodonhotelid, patchfoodonId, postfoodonHotels } from "../controller/Foodcontroller";

const express = require("express");
const foodsRouter=express.Router();
foodsRouter.use(express.json());
foodsRouter.patch('/',patchfoodonId)  
// Patch food on foodid
foodsRouter.post('/',postfoodonHotels)
foodsRouter.get('/:hotelid',getfoodonhotelid)
module.exports=foodsRouter