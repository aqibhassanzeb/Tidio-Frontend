import { configureStore } from '@reduxjs/toolkit'
import ChatSlice from './features/ChatSlice'
import UserSlice from './features/UserSlice'
export const store = configureStore({
  reducer: {
    User:UserSlice,SelectedUser:ChatSlice
  },
})