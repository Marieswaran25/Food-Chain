import {AppDataSource} from './Datasource/datasource'
const express=require('express')
const app=express();
const port:number=9000;
const cors=require('cors')
const registerRoute=require('./routes/Register')
const LoginRouter=require('./routes/Login')
const HotelRouter=require('./routes/hotel')
const foodsRouter=require('./routes/food')
const otpRouter=require('./routes/otp')
require('dotenv').config()



app.use(cors());

app.use(express.json())
AppDataSource.initialize()
.then(()=>{
    console.log('Datasource is initialized')
    app.use('/signin',registerRoute)
    app.use('/login',LoginRouter)
    app.use('/hotels',HotelRouter)
    app.use('/foods',foodsRouter)
    app.use('/otp',otpRouter)
    app.listen(port,()=>{
        console.log(`Express app running at ${port}`)
    })
})
.catch((err)=>{
    console.log('Datasource is not initialized',err)
})


