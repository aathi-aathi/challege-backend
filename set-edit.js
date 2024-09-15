import express from 'express'
import { db } from './mongodb/mongodb-connect.js'
const setEditRouter = express.Router()
setEditRouter.put('/:id',async(req,res)=>{
    const id = Number(req.params.id)
    const userObj = db.collection('challenges').findOne({id:id,isEdit:false})
    try {
      if(userObj){
        await db.collection('challenges').updateOne({id:id},{$set:{isEdit:true}})
        res.send({msg:'updated'})
      }else{
        await db.collection('challenges').updateOne({id:id},{$set:{isEdit:false}})
      res.send({msg:'updated'})
      }
      
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:'something went wrong'})
    }
    
})
export default setEditRouter;