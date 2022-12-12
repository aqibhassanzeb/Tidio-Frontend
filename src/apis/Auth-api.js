import { apiURL } from '../config/index'


let usertoken = localStorage.getItem("token")
const config = {
    headers: {

        Authorization: `Bearer ${usertoken}`
    }
}

export const userRegister=async(reqParam) => {
        const response  = await apiURL.post("userloginvalidemail", reqParam);
        return response;
      }
export const verifyEmail=async(reqParam) => {
        const response  = await apiURL.post(`/userlogintoken/${reqParam}`);
        return response;
      }

export const userLogin=async(reqParam) => {
        const response  = await apiURL.post("userlogin", reqParam);
        return response;
      }

export const userUpdate=async(reqParam,_id) => {
        const response  = await apiURL.put(`userUpdate/${_id}`, reqParam);
        return response;
      }
export const userPassUpdate=async(reqParam) => {
        const response  = await apiURL.put(`userpassupdate`, reqParam);
        return response;
      }

export const socailLogin=async(reqParam) => {
        const response  = await apiURL.post("socailLogin", reqParam);
        return response;
      }
export const resetPassword=async(reqParam) => {
        const response  = await apiURL.post("reset-password", reqParam);
        return response;
      }
export const newPassword=async(reqParam) => {
        const response  = await apiURL.post("new-password", reqParam);
        return response;
      }
export const projectShow=async(_id) => {
        const response  = await apiURL.get(`projectshow`,config);
        return response;
      }
export const projectAdd=async(reqParam) => {
        const response  = await apiURL.post(`addproject`,reqParam, config);
        return response;
      }

