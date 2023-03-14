import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showSlider: false,
}
const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    openSlider: (state) => {
      state.showSlider = true
    },

    // optionHandler: (state, { payload }) => {
    //   const { option, type } = payload
    //   state[option] += type === 'inc' ? 1 : -1
    // },
  },
})

export const { openSlider } = sliderSlice.actions

export default sliderSlice.reducer
