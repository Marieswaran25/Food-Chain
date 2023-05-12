import { Request, Response } from "express";
import { AppDataSource } from "../Datasource/datasource";
import { OTP } from "../entities/otp/otp";
const fast2sms = require('fast-two-sms')

const otprepo=AppDataSource.getRepository(OTP)
export async function  sendotp(req:Request,res:Response){
    const number=req.body;
    const initialotp=otprepo.create({
        mobile:number.mobile,
        otp:'1234',
        status:'pending'
    }).save();
    try {
        var options = {authorization : "mv7AROiDTZh9bESG5juYBoL10Ir8F6tx4gMfnakeNKc3lCUHQsUvd6ZEz3KTcCFLOotYeuBDhsAwVSr1" , message : `Test otp 1234` ,  numbers:['6383961454']} 
   const response=  await fast2sms.sendMessage(options)
   console.log(response)
   res.send(response)
    } catch (error) {
        console.log(error)
    }
}