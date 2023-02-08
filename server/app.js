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
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)
// app.get('/', (res, req) => {
// console.log('send...')
// })

app.listen(5000, () => {
  // connect()
  console.log('Connected...')
})
