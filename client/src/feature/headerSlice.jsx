import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchQuery: '',
  date: '',
  adult: 1,
  children: 0,
  room: 1,
  openRoomOptions: false,
  showSearchContant: true,
}
const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    openOptions: (state, action) => {
      state.openRoomOptions = !state.openRoomOptions
    },
    optionHandler: (state, { payload }) => {
      const { option, type } = payload
      state[option] += type === 'inc' ? 1 : -1
    },
  },
})

export const { openOptions, optionHandler } = headerSlice.actions
export default headerSlice.reducer
