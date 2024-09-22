import { AppProvider, AuthProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

const providers: AuthProvider[] = [{ id: 'credentials', name: 'Email and Password' }];

export const LoginPage = () => {
  const signIn = () => {};
  const theme = useTheme();
  return (
    <AppProvider theme={theme}>
      <SignInPage signIn={signIn} providers={providers} slots={{
        signUpLink: () => <Link href='/sign-up'>sign-up</Link>
      }} />
    </AppProvider>
  );
};


import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { setCookie } from '../../shared/cookies/set';
import { AnyObjectType } from '../../shared/types';
import Axios, { AxiosRequestConfig } from 'axios';
import { getCookie } from '../../shared/cookies/get';



const  BASE_APP_PATH  = "http://vitrina-urfu.ru/v1";

export const AXIOS_INSTANCE = Axios.create({ baseURL: BASE_APP_PATH });

AXIOS_INSTANCE.interceptors.request.use((config) => {
  config.headers.Authorization = getCookie("auth");
  config.headers["ngrok-skip-browser-warning"] = "true";
  return config;
});



export interface IAuthStore {
   isAuth: boolean;
   setIsAuth: Dispatch<SetStateAction<boolean>>;
}
  //@ts-ignore
export const authContext = createContext<IAuthStore>(null);

export const useAuthContext = () => {
   return useContext(authContext);
};

export const AuthStoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  //@ts-ignore
   const [isAuth, setIsAuth] = useState<false>(null);
  //@ts-ignore
   return <authContext.Provider value={{ isAuth, setIsAuth }}>{children}</authContext.Provider>;
};

export const userContext = createContext(null);

export const useUserContext = () => {
   const userStore = useContext(userContext);

   return { userStore };
};

export const UserStoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
   const [user, setUser] = useState<any>(null);
  //@ts-ignore
   return <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>;
};

const fetchUser = async () => {
   const res = await AXIOS_INSTANCE.get("/auth/login/w", {
      headers: {
         "ngrok-skip-browser-warning": "true",
      },
   });

   console.log(res);
   return res.data;
};

const login = async ({ email, password }: { email: string; password: string }) => {
   const res = await AXIOS_INSTANCE.post(
      "/auth/login",
      {
         email,
         password,
      },
      {
         headers: {
            "ngrok-skip-browser-warning": "true",
         },
      },
   );

   console.log(res);

   const { name, value, expires } = res.data;
   console.log(name, value, { expires });
   setCookie(name, value, { expires });
};

export const AuthGuard: FC<{ children: ReactNode }> = ({ children }) => {
 

   return <>{children}</>;
};

interface ILoginFormProps {
   setIsLoading: (isLoading: boolean) => void;
}

export const LoginForm: FC<ILoginFormProps> = ({ setIsLoading }) => {
   const { userStore } = useUserContext();
   const methods = useForm<AnyObjectType>();
   const { setIsAuth } = useAuthContext();

   const submitForm = async ({ email, password }: { email: string; password: string }) => {
      await login({ email: email, password });
      const user = await fetchUser();
  //@ts-ignore
      userStore?.setUser(user);
      setIsAuth(true);
      setIsLoading(false);
   };

   return (
      <Box display="flex" alignItems="center" justifyContent="center">
         <form onSubmit={methods.handleSubmit(submitForm)}>
            <TextField {...methods.register("email")} />
            <TextField {...methods.register("password")} type="password" />
            <Button type="submit">Войти</Button>
         </form>
      </Box>
   );
};