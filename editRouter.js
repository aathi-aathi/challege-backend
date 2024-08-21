import express from 'express'
import { db } from './mongodb/mongodb-connect.js'
const editRouter = express.Router()
editRouter.post('/:id',async(req,res)=>{
    const id = Number(req.params.id)
    const showDate = new Date()
    const date = showDate.getDate()+'/'+showDate.getMonth()+'/'+showDate.getFullYear()
    
    try {
      await db.collection('challenges').updateOne({id:id},{$set:{isCompleted: true,date:date}})
      res.send({msg:'updated'})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:'something went wrong'})
    }
    
})
export default editRouter;