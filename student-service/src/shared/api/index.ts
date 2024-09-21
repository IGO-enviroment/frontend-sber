import axios from "axios"

export const baseURL =
  "https://237a-2a03-d000-5101-b51f-d4b9-fcac-dcaa-8b64.ngrok-free.app/v1"

export const API = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    "ngrok-skip-browser-warning": true,
  },
})
