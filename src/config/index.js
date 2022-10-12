import axios from "axios";
export const GOOGLE_OAUTH =process.env.REACT_APP_GOOGLE_OAUTH
export const FACEBOOK_APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID
export const apiURL= axios.create({
  baseURL: process.env.REACT_APP_API_URL
});
