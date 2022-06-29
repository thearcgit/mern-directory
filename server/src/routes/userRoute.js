import express from 'express'
import { getOneDoc } from '../controller/userController.js'

const router = express.Router()

// router.post('/registration',userRegistration)
// router.post('/login',userLogin)
router.get('/getdoc',getOneDoc)
// router.get('/',homePage)
// router.get('/registration',registrationPage)



export default router