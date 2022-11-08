import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedUser: null,
    notification:[],
    subUsernotif:[],
}

const ChatSlice = createSlice({
    name: 'selecteduser',
    initialState,
    reducers: {
        setSelectUser: (state, action) => {
            state.selectedUser = action.payload
        },
        setNotification: (state, action) => {
                state.notification = [...state.notification, action.payload]
        },
        setNotifSelectChat: (state, action) => {   
            state.notification = action.payload
        },
    
        setNotificationClear: (state, action) => {
                state.notification = []
        },
        setsubUserNotif: (state, action) => {
                state.subUsernotif = [...state.subUsernotif, action.payload]
        },
        setsubUserNotifClear: (state, action) => {
                state.subUsernotif = []
        },
       
       


    }
});

export const { setSelectUser ,setNotification,setsubUserNotif,setsubUserNotifClear,setNotificationClear,setNotifSelectChat} = ChatSlice.actions

export default ChatSlice.reducer