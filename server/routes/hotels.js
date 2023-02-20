import express from 'express'
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from '../controllers/hotels.js'
const router = express.Router()

// GET
router.get('/:id', getHotel)
// GET ALL
router.get('/', getAllHotels)
// CREATE
router.post('/', createHotel)
// UPDATE
router.put('/:id', updateHotel)
// DELETE
router.delete('/:id', deleteHotel)

export default router
