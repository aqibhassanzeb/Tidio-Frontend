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
    const response  = await apiURL.get(`alluser?search=${reqParam}`,config2);
        return response
      }
      
      
      
export const selectUser=async(reqParam) => {
    const response  = await apiURL.post('chat',reqParam,config);
        return response
      }
      
export const sendMessage=async(reqParam) => {
      const response  = await apiURL.post('messages',reqParam,config);
          return response
               }
export const fetchMessages=async(reqParam) => {
      const response  = await apiURL.get(`messages/${reqParam}`,config);
          return response
               }


