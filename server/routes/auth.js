import express from 'express'
const router = express.Router()

// CREATE
router.post('/', (req, res) => {
  res.send('hello auth')
})
// UPDATE
// DELETE
// GET
// GET ALL

export default router
