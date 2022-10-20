import { useSelector } from 'react-redux';
import { apiURL } from '../config/index'


let usertoken = localStorage.getItem("token")
const config={
    headers:{
        
        Authorization:`Bearer ${usertoken}`
    }
}
const config2={
    headers:{
        Authorization:`Bearer ${usertoken}`
    }
}



export const getAllUser=async(reqParam) => {
    console.log("req param :",reqParam)
    const response  = await apiURL.get(`alluser?search=${reqParam}`,config2);
    console.log("req param 2 :",reqParam)
        return response
      }
export const selectUser=async(reqParam) => {
    console.log("req param :",reqParam)
    const response  = await apiURL.post('chat',reqParam,config);
    console.log("req param 2 :",reqParam)
        return response
      }



