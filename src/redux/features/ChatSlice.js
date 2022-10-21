import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedUser: null,
    notification:[]
}

const ChatSlice = createSlice({
    name: 'selecteduser',
    initialState,
    reducers: {
        setSelectUser: (state, action) => {
            state.selectedUser = action.payload
        },
        setNotification: (state, action) => {
            state.notification = [...state, action.payload]
        },
       
       


    }
});

export const { setSelectUser ,setNotification} = ChatSlice.actions

export default ChatSlice.reducer