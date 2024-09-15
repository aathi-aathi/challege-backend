import express from 'express'
import connectToDb from './mongodb/mongodb-connect.js'
import cors from 'cors'
import getRouter from './challenge.js'
import editRouter from './editRouter.js'
import setEditRouter from './set-edit.js'
import chaneDateRouter from './change-date.js'
import userRouter from './routes/user.js'
import loginRouter from './routes/login.js'

const app = express()
app.use(express.json())
app.use(cors())
await connectToDb()
app.use('/challenge',getRouter)
app.use('/edit',editRouter)
app.use('/set-edit',setEditRouter)
app.use('/change-date',chaneDateRouter)
app.use('/user',userRouter)
app.use('/login',loginRouter)
const port = 7303
app.listen(port,()=>{
    console.log('port',port ,'running...')
})