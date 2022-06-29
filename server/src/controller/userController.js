import serviceModel from "../models/userModel.js"


export const userRegistration = async (req,res) => {
      
}
export const getOneDoc = async (req,res,next) =>{
    try {
        const doc = await serviceModel.findOne()
        res.status(200).json(doc)        
    } catch (error) {
        res.status(400).json({err:error})
        
    }
    
}
export const homePage = (req,res,next) =>{
    res.render('index')
}
export const registrationPage = (req,res,next) =>{
    res.render('registration')
}
export const loginPage = (req,res,next) =>{
    res.render('login')
}