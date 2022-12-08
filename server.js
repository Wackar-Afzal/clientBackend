const express = require('express')
const cors = require('cors')
const path = require('path')
const color = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const GaolsRouter = require('./routes/GoalsRoutes')
const {errorHandler} = require('./middleWare/ErrorMiddleWare')
const connectDB = require('./DB/DB')




const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use('/api/data', GaolsRouter)
app.use('/', (req,res)=>res.send('hellooooo'))


app.use(errorHandler)


const start = async()=>{
    await connectDB()
    app.listen(port , ()=>console.log(`server running on port ${port}`))
}

start()