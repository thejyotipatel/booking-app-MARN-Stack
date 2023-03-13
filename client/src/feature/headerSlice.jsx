import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchQuery: '',
  date: '',
  adult: 1,
  children: 0,
  room: 1,
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
  },
})

export const { openOptions, openDateOption, optionHandler } =
  headerSlice.actions
export default headerSlice.reducer
