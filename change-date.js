import express from 'express'
import { db } from './mongodb/mongodb-connect.js'
const chaneDateRouter = express.Router()
chaneDateRouter.post('/:id',async(req,res)=>{
    const id = Number(req.params.id)
    const userData = req.body

    try {
        await db.collection('challenges').updateOne({id:id},{$set:{date:userData.date,isEdit:false}})
        res.send({msg:'updated'})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:'something went wrong'})
    }
    
})
export default chaneDateRouter;