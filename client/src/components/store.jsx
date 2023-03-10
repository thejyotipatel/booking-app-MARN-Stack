import { configureStore } from '@reduxjs/toolkit'
import headerReducer from '../feature/headerSlice'

export const store = configureStore({
  reducer: {
    header: headerReducer,
  },
})
