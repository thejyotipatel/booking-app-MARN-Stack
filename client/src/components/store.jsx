import { configureStore } from '@reduxjs/toolkit'
import headerReducer from '../feature/headerSlice'
import sliderReducer from '../feature/sliderSlice'

export const store = configureStore({
  reducer: {
    header: headerReducer,
    slider: sliderReducer,
  },
})
