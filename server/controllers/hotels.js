import Hotel from '../models/Hotel.js'

// GET
export const getHotel = async (req, res, next) => {
  return next()
  try {
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).json(hotel)
  } catch (err) {
    res.status(500).json(err)
  }
}
// GET ALL
export const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find()
    res.status(200).json(hotels)
  } catch (err) {
    res.status(500).json(err)
  }
}
// CREATE
export const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body)

  try {
    const saveHotel = await newHotel.save()
    res.status(200).json(saveHotel)
  } catch (err) {
    res.status(500).json(err)
  }
}
// UPDATE
export const updateHotel = async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updateHotel)
  } catch (err) {
    res.status(500).json(err)
  }
}
// DELETE
export const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id)
    res.status(200).json({ msg: req.params.id + ' is deleted' })
  } catch (err) {
    res.status(500).json(err)
  }
}
