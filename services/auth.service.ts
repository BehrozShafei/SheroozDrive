import axios, { AxiosInstance } from "axios";
import { getAuthorizationHeader } from "../utils/getAuthorizationHeader";

export default function AuthService() {
  const axios = require("axios");
  axios.defaults.baseURL = "http://localhost:8000/";
  return {
    login: (email: string, password: string) => {
      return axios
        .post("/auth/login", {
          email,
          password,
        })
        .then((res) => {
          return res.data.token;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },

    getMe: (userId: string) => {
      axios
        .get(`/users/${userId}`, {
          headers: getAuthorizationHeader(),
        })
        .then((res) => {
          return res.data;
        });
    },
    uploadAvatar: (userId: string, newAvatar: File) => {
      const formData = new FormData();
      formData.append("file", newAvatar);
      axios
        .post(`/users/${userId}/upload`, formData, {
          headers: getAuthorizationHeader(),
        })
        .then((res) => {
          return {
            newAvatar: res.data.data.url,
          };
        });
    },
  };
}
