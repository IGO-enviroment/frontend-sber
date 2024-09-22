import axios from "axios"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const baseURL = "https://vitrina-urfu.ru/v1"

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
  }),
  endpoints: () => ({}),
})

export const API = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    Origin: "http://localhost:5173/",
  },
})
