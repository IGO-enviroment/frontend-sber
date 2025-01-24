import { AppProvider, AuthProvider, AuthResponse, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';
import { setCookie } from '../../shared/cookies/set';
import { SignInDTO, useSignUpUni } from '../../shared/react-query/sign-in/use-sign-in.ts';
import { useGetUser } from '../../shared/react-query/sign-in/use-get-user.ts';
import { Navigate, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const providers: AuthProvider[] = [{ id: 'credentials', name: 'Email and Password' }];

export const LoginPage = () => {

  const { mutateAsync } = useSignUpUni();
  const { setIsAuth } = useAuthContext()

  const { login } = useAuth();
  const navigate = useNavigate();



  const signIn = async (formData: SignInDTO): Promise<AuthResponse> => {
    try {
      const res = await mutateAsync(formData);
      console.log(res)
      setCookie('HTTP_AUTHORIZATION', res.access_token);
      setIsAuth?.(true)
      login();
      navigate('/practices')
    }catch (e) {
      console.log(e)
    }

    return {};
  };

  const theme = useTheme();

  return (
    <AppProvider theme={theme}>
      <SignInPage signIn={(_provider, formData) => signIn(formData)} providers={providers} slots={{
        signUpLink: () => <Link href="/sign-up">sign-up</Link>,
      }} />
    </AppProvider>
  );
};


type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProviderComponent: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Кастомный хук для удобного использования контекста
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProviderComponent');
  }
  return context;
};

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { error, isLoading} = useGetUser()

  if (isLoading) return <CircularProgress/>

  // @ts-ignore
  // if (!isAuthenticated || error?.status === 403) {
  //   return <Navigate to="/login" replace />;
  // }

  return <>{children}</>;
};


//
export interface IAuthStore {
  isAuth: boolean | null;
  setIsAuth?: Dispatch<SetStateAction<boolean | null>>;
}

export const authContext = createContext<IAuthStore>({
  isAuth: null
});

export const useAuthContext = () => {
  return useContext(authContext);
};
export const AuthStoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  return <authContext.Provider value={{ isAuth, setIsAuth }}>{children}</authContext.Provider>;
};

export const AuthGuard: FC<{ children?: ReactNode }> = ({ children }) => {
  const {  setIsAuth } = useAuthContext();
  const { error, status} = useGetUser()


  const [isAuthRes, setIsAuthRes] = useState(false);
  const navigate = useNavigate()


  useEffect(() => {
    // @ts-ignore
    if (error.status === 403) {
      setIsAuth?.(false)
      setIsAuthRes(false)
    }

    if (status === 'success') {
      setIsAuth?.(true)
      setIsAuthRes(true)
    }
  }, [status]);


  if (!isAuthRes) {
    navigate('login')
    return null;
  }

  return <>{children}</>;
};
