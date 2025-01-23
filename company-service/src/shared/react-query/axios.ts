// import Axios, { AxiosRequestConfig } from 'axios';
// import { getCookie } from '../cookies/get';

// // const  BASE_APP_PATH  = "https://2f89-193-0-185-147.ngrok-free.app/v2";
// const  BASE_APP_PATH  = "https://2f89-193-0-185-147.ngrok-free.app/v2";

// export const AXIOS_INSTANCE = Axios.create({ baseURL: BASE_APP_PATH });

// AXIOS_INSTANCE.interceptors.request.use((config) => {
//   config.headers.Authorization = getCookie("auth");
//   config.headers["ngrok-skip-browser-warning"] = "true";
//   return config;
// });



// export const customAxiosInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
//   return AXIOS_INSTANCE({
//     ...config,
//     ...options,
//   }).then(({ data }) => data);
// };


import Axios, { AxiosRequestConfig } from 'axios';
import { getCookie } from '../cookies/get.ts';

const  BASE_APP_PATH  = "https://pfhp3j0r-3000.euw.devtunnels.ms/";

export const AXIOS_INSTANCE = Axios.create({ baseURL: BASE_APP_PATH });

AXIOS_INSTANCE.interceptors.request.use((config) => {
  console.log(getCookie('HTTP_AUTHORIZATION'))
  config.headers.Authorization = `Bearer ${getCookie('HTTP_AUTHORIZATION')}`;
  return config;
});



export const customAxiosInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  return AXIOS_INSTANCE({
    ...config,
    ...options,
  }).then(({ data }) => data);
};
