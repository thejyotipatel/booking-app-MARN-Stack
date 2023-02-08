import express from 'express'
const router = express.Router()

router.post('/', (req, res) => {
  res.send('hello auth')
})

export default router
