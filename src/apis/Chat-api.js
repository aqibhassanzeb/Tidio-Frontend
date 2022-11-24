import { useSelector } from 'react-redux';
import { apiURL } from '../config/index'


let usertoken = localStorage.getItem("token")
const config = {
    headers: {

        Authorization: `Bearer ${usertoken}`
    }
}
const config2 = {
    headers: {
        Authorization: `Bearer ${usertoken}`
    }
}



export const getAllUser = async (reqParam) => {
    const response = await apiURL.get(`alluser?search=${reqParam}`, config2);
    return response
}



export const selectUser = async (reqParam) => {
    const response = await apiURL.post('chat', reqParam, config);
    return response
}

export const sendMessage = async (reqParam) => {
    const response = await apiURL.post('messages', reqParam, config);
    return response
}
export const fetchMessages = async (reqParam) => {
    const response = await apiURL.get(`messages/${reqParam}`, config);
    return response
}

// chat for second time for user to subuser

export const newChatbotCreate = async (reqParam) => {
    const response = await apiURL.post(`newusercreate`, reqParam, config);
    return response
}
export const Chatbotfetch = async (reqParam) => {
    const response = await apiURL.get(`/subuserfetch/${reqParam}`, config);
    return response
}
export const Chatbotdelete = async (reqParam) => {
    const response = await apiURL.delete(`/subuserdelete/${reqParam}`, config);
    return response
}

export const createChat = async (reqParam) => {
    const response = await apiURL.post('chat2', reqParam);
    return response
}
export const sendMessage2 = async (reqParam) => {
    const response = await apiURL.post('messages2', reqParam);
    return response
}
export const fetchMessages2 = async (reqParam) => {
    const response = await apiURL.get(`messages/${reqParam}`);
    return response
}
export const fetchChat2 = async (reqParam) => {
    const response = await apiURL.get(`chat2?Admin=${reqParam}`, config);
    return response
}
export const selectUser2 = async (reqParam) => {
//   console.log("req param :",reqParam)
    const response = await apiURL.post('chat2', reqParam, config);
    return response
}

export const subUserchatDelete = async (reqParam) => {
    const response = await apiURL.put(`/subuserdeletechat/${reqParam}`, config);
    return response
}



