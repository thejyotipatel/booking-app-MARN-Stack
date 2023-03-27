import { createSlice } from '@reduxjs/toolkit'

import orange1 from '../assets/image-gallery-cone.jpg'
import orange2 from '../assets/image-gallery-milkbottles.jpg'
import orange3 from '../assets/image-gallery-orange.jpg'
import orange4 from '../assets/image-gallery-sugar-cubes.jpg'
import orange5 from '../assets/image-stand-out.jpg'
import oranges from '../assets/orange.jpg'
const Photos = [
  {
    src: oranges,
  },
  {
    src: orange1,
  },
  {
    src: orange2,
  },
  {
    src: orange3,
  },
  {
    src: orange4,
  },
  {
    src: orange5,
  },
]
const initialState = {
  photos: Photos,
  showSlider: false,
  sliderIndex: 0,
  sliderImg: '',
}
const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    openSlider: (state) => {
      state.showSlider = !state.showSlider
    },

    handleSlider: (state, { payload }) => {
      state.showSlider = true
      state.sliderIndex = payload.index
    },
    handleSliderIndex: (state, { payload }) => {
      state.sliderIndex += payload.type === 'inc' ? 1 : -1

      if (state.sliderIndex === 6 && payload.type === 'inc') {
        state.sliderIndex = 0
      } else if (state.sliderIndex === -1 && payload.type === 'dec') {
        state.sliderIndex = 5
      }
    },
  },
})

export const { openSlider, handleSlider, handleSliderIndex } =
  sliderSlice.actions

export default sliderSlice.reducer
