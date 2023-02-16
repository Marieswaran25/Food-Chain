import {AppDataSource} from './Datasource/datasource'
const express=require('express')
const app=express();
const port:number=8080;
const registerRoute=require('./routes/Register')
AppDataSource.initialize()
.then(()=>{
    console.log('Datasource is initialized')
    app.use(express.json())
    app.use('/signup',registerRoute)
    app.listen(port,()=>{
        console.log(`Express app running at ${port}`)
    })
})
.catch((err)=>{
    console.log('Datasource is not initialized',err)
})