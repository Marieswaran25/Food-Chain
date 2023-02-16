import { AppDataSource } from "../Datasource/datasource";
import { Authentication } from "../entities/Authentication/auth";
import { Profile } from "../entities/Profile/profile";
import { Request, Response } from "express";

export const authRepo = AppDataSource.getRepository(Authentication);
export const profRepo = AppDataSource.getRepository(Profile);

export const showsignup = async (Request: Request, Response: Response) => {
  Response.send("signuppage");
};
export const register = async (Request: Request, Response: Response) => {
  const { Email, password, Firstname, Lastname, phoneno }: any = Request.body;
  
  try {
    const existinguser = await authRepo.findOneBy({ email: Email });
        if (!existinguser) {
            const profileinserted=await Profile.create({
                Firstname:Firstname,
                Lastname:Lastname,
                phoneno:phoneno
            }).save();
            const userinserted=await Authentication.create({
                email:Email,
                password:password,
                profileid:profileinserted
            }).save();
            return Response.status(201).send(userinserted);
        } 
        else {
            return Response.status(400).send("User already found");
        }
  } 
  catch (error: any){
    return Response.status(400).send(`${error.column} is missing`);
  }
};

export const loginpage = async (Request: Request, Response: Response) => {
    Response.send("loginpage");
};


export const login = async (Request: Request, Response: Response) => {
  const { Email, password } = Request.body;
    try {
        const user = await authRepo.findOneBy({ email: Email });
        if (!user) {
            return Response.status(409).send("user Not found please sign up");
        } 
        else if (user.password !== password && user) {
            return Response.status(409).send("Invalid Email or Password");
        } 
        else {
            return Response.status(200).send({ accesstoken: user.generatejwt() });
        }
    } 
    catch (error:any){
        return Response.status(400).send(error.message);
    }
};