import express from 'express'
const app = express()
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

// routes
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connect to db.')
  } catch (error) {
    throw error
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('mongodb disconnected!')
})
mongoose.connection.on('connected', () => {
  console.log('mongodb connected!')
})

// middlewares
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.get((err, req, res, next) => {
  // const errorStatus = err.status || 500
  // const errorMessage = err.message || 'Somrthing went wrong!'
  // return res.status(errorStatus).json({
  //   success: false,
  //   status: errorStatus,
  //   message: errorMessage,
  //   stack: err.stack,
  // })
  console.log('middle error')
  next()
})

app.listen(5000, () => {
  connect()
  console.log('Connected...')
})
