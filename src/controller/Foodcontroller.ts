import { Response } from "express";
import { Request } from "express-validator/src/base";
import { AppDataSource } from "../Datasource/datasource";
import { Foods } from "../entities/Food/food";
import { hotelRepo } from "./HotelController";
const foodmanager =  AppDataSource.getRepository(Foods);

export async function postfoodonHotels(req: Request, res: Response) {
  const { hotelname, foodjson }: any = req.body;
  try {
    const hotelexist = await hotelRepo.findBy({hotelname:hotelname});
    console.log(hotelexist)
    if (hotelexist.length!==0) {
       const data= await foodmanager.create({
          food:foodjson,
          hotelname:hotelname,
          hotelhotelid:hotelexist[0],
        }).save()
        return res.status(201).send(data);
      }
      else{
        return res.status(404).send('Hotel not found');
      }

  } catch (error) {
    return res.send('Hotel already posted if you wanna update try patch')
  }
 
  
  
  
}
export async function patchfoodonId(req:Request,res:Response){
  const { foodjson,foodid }: any = req.body;
    try {
      const foodidS=await foodmanager.findBy({id:foodid})
      if(foodidS.length!==0)
      {
        await foodmanager.createQueryBuilder()
        .update({
          food:foodjson
        })
        .where('id=:id',{
        id:foodid
        }).execute()
        return res.status(202).send(await foodmanager.findBy({id:foodid}))
      }
      else{
        return res.status(404).send('foodid is not found')
      }
  
    } catch (error) {
    }
  
}

export async function getfoodonhotelid(req:Request,res:Response){
  const hotelid  = req.params?.foodid;
 const data= await foodmanager.findBy({hotelhotelid:hotelid})
 console.log(data)

 if(data.length!==0){
  return res.status(200).send(data[0].food)
 }
 else{
  return res.status(404).send('Hotelid not found')

 }
}