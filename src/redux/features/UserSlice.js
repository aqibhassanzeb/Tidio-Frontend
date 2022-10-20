import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeUser: null,
    userToken:null
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.activeUser = action.payload
        },
        setActiveToken: (state, action) => {
            state.userToken = action.payload
        },
        setLogout: (state) => {
            state.activeUser = null

        }


    }
});

export const { setActiveUser, setLogout,setActiveToken } = UserSlice.actions

export default UserSlice.reducer