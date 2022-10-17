import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeUser: null,
    
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.activeUser = action.payload

        },
        setLogout: (state) => {
            state.activeUser = null

        }


    }
});

export const { setActiveUser, setLogout } = UserSlice.actions

export default UserSlice.reducer