import Axios, { AxiosRequestConfig } from 'axios';

const  BASE_APP_PATH  = "https://2f89-193-0-185-147.ngrok-free.app/v2";

export const AXIOS_INSTANCE = Axios.create({ baseURL: BASE_APP_PATH });

// AXIOS_INSTANCE.interceptors.request.use((config) => {
//   config.headers.set('User-Language', localStorage.getItem('devportal-language') === 'ru' ? 'ru-RU' : 'en-EN');
//   return config;
// });



export const customAxiosInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  return AXIOS_INSTANCE({
    ...config,
    ...options,
  }).then(({ data }) => data);
};
