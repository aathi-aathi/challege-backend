import express from 'express'
import { db } from './mongodb/mongodb-connect.js'

const getRouter = express.Router()
getRouter.get('/',async(req,res)=>{
   const data = await db.collection('challenges').find({}).toArray()
   res.send(data)
})

export default getRouter;