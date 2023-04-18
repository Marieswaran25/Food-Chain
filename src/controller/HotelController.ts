import { AppDataSource } from "../Datasource/datasource";
import { Hotels } from "../entities/Hotels/hotel";
import { Request, Response } from "express";


export const hotelRepo = AppDataSource.getRepository(Hotels);
 
export const createHotel=async(request:Request,response:Response)=>{
    const {hotelname,address,mobile}:any=request.body
    try {
        const existhotel=await hotelRepo.findOneBy({hotelname:hotelname})
        if(!existhotel){
            const hotelinserted=hotelRepo.create({
                hotelname:hotelname,
                address:address,
                mobile:mobile
            })
            await hotelinserted.save();
            return response.status(201).send(hotelinserted);
        }
        else{
            return response.status(409).send('Hotel already added')
        }
    } catch (error:any) {
        return response.status(400).send(`${error.coloumn} is missing`);

    }
}
export const getAllhotels=async(request:Request,response:Response)=>{
try {
    const data=await hotelRepo.manager.find(Hotels);
    return response.status(200).send(data);
} 
catch (error:any) {
    return response.status(400).send(error.message);
}
}