
import express from 'express'
import mongoose from 'mongoose'


const serviceSchema = mongoose.Schema({
    service:{type:String,uppercase:true},
    price:{type:String,uppercase:true},
    date:{type:Date,default:Date.now},
    
})



const serviceModel = mongoose.model('service',serviceSchema)

export default serviceModel