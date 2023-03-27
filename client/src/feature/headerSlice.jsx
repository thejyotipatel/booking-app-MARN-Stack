import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  destination: '',
  date: '',
  adult: 1,
  children: 0,
  room: 1,
  maxPrice: '',
  minPrice: '',
  openRoomOptions: false,
  openDateOptions: false,
  showSearchContant: true,
}
const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    openOptions: (state) => {
      state.openRoomOptions = !state.openRoomOptions
    },
    openDateOption: (state) => {
      state.openDateOptions = !state.openDateOptions
    },
    optionHandler: (state, { payload }) => {
      const { option, type } = payload
      state[option] += type === 'inc' ? 1 : -1
    },
    inputHandler: (state, { payload }) => {
      const { value, name } = payload
      state[name] = value
    },
    searchHandler: (state) => {},
  },
})

export const {
  openOptions,
  openDateOption,
  optionHandler,
  inputHandler,
  searchHandler,
} = headerSlice.actions
export default headerSlice.reducer
