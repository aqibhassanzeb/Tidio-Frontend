import { apiURL } from '../config/index'

export const userRegister=async(reqParam) => {
        const response  = await apiURL.post("user", reqParam);
        return response;
      }
export const userLogin=async(reqParam) => {
        const response  = await apiURL.post("userlogin", reqParam);
        return response;
      }

