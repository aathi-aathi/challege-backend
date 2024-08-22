import express from 'express'
import connectToDb from './mongodb/mongodb-connect.js'
import cors from 'cors'
import getRouter from './challenge.js'
import editRouter from './editRouter.js'

const app = express()
app.use(express.json())
app.use(cors())
await connectToDb()
app.use('/challenge',getRouter)
app.use('/edit',editRouter)

const port = 7303
app.listen(port,()=>{
    console.log('port',port ,'running...')
})