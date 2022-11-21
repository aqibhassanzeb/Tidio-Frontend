import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedUser: null,
    notification:[],
    subUsernotif:[],
   callHandle:{
    callReceving:false,
    Caller:null,
    name:null,
    callerSignal:null,
    handleCall:false,
}

}
//  handleCall()
//         setReceivingCall(true)
//         setCaller(data.from)
//         setName(data.name)
//         setCallerSignal(data.signal)
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
       setCallHandle:(state,action)=>{
            state.callHandle.callReceving=action.payload.callReceving
            state.callHandle.Caller=action.payload.Caller
            state.callHandle.callerSignal=action.payload.callerSignal
            state.callHandle.handleCall=action.payload.handleCall
            state.callHandle.name=action.payload.name
       }
       


    }
});

export const { setSelectUser ,setNotification,setsubUserNotif,setsubUserNotifClear,setNotificationClear,setNotifSelectChat,setCallHandle} = ChatSlice.actions

export default ChatSlice.reducer