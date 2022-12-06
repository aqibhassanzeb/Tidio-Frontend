import { apiURL } from '../config/index'



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

