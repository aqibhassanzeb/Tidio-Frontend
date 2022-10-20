import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedUser: null,
}

const ChatSlice = createSlice({
    name: 'selecteduser',
    initialState,
    reducers: {
        setSelectUser: (state, action) => {
            state.selectedUser = action.payload
        },
       
       


    }
});

export const { setSelectUser } = ChatSlice.actions

export default ChatSlice.reducer