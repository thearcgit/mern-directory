import express from 'express'
import { connectDB } from './db/connection.js'
import router from './routes/userRoute.js'


import dotenv from 'dotenv'
dotenv.config()

const app = express()

const dataBase = process.env.DATABASE


// Applying Middleware............
// app.use('/',registeration)

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',router)

app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Allow-Control-Headers',
    'Origin, X-requested-Width, Content-Type, Accept, Authorization')
    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE')
        return res.status(200).json({})
    }
    next()
})



connectDB(dataBase)

export default app