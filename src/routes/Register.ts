const express = require("express");
import { AppDataSource } from "../Datasource/datasource";
import { Request, Response } from "express";
import { Authentication } from "../entities/Authentication/auth";
import { Profile } from "../entities/Profile/profile";
const registerRouter = express.Router();
registerRouter.use(express.json());
registerRouter
  .route("/")
  .get((Request: Request, Response: Response) => {
    Response.end("signuppage");
  })
  .post(async (Request: Request, Response: Response) => {
    const { Email, password, Firstname, Lastname, phoneno } = Request.body;
    const authRepo = AppDataSource.getRepository(Authentication);
    const profRepo = AppDataSource.getRepository(Profile);
    try {
      const existinguser = await authRepo.findOneBy({ email: Email });
      if (!existinguser) {
        const prof: Profile = new Profile();
        prof.Firstname = Firstname;
        prof.Lastname = Lastname;
        prof.phoneno = phoneno;

        const profinserted = await profRepo.save(prof);

        const auth: Authentication = new Authentication();
        auth.email = Email;
        auth.password = password;
        auth.profileid = profinserted;
        
        const userinserted = await authRepo.save(auth);

        return Response.json(userinserted);
      } 
      else 
      {
        return Response.status(400).send("User already found");
      }
    } catch (error: any) 
    {
      return Response.status(400).send(`${error.column} is missing`);
    }
  });
module.exports = registerRouter;
