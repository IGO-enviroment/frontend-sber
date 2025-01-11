import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import './App.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '@/entities/User/model/services/getUser';
import { getUserInited } from '@/entities/User/model/selectors/getUserIsInited/getUserIsInited';
import AppRouter from './providers/router/ui/router';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/shared/mui';

function App() {
  const dispatch = useAppDispatch();
  const isInited = useSelector(getUserInited);

  useEffect(() => {
    // TODO: исправить
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatch(getUser() as any);
  }, [dispatch]);

  console.log(theme)

  return <>{isInited && <ThemeProvider theme={theme}><AppRouter /></ThemeProvider>}</>;
}

export default App
