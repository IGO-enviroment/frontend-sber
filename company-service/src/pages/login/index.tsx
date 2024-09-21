import { AppProvider, AuthProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';

const providers: AuthProvider[] = [{ id: 'credentials', name: 'Email and Password' }];

export const LoginPage = () => {
  const signIn = () => {};
  const theme = useTheme();
  return (
    <AppProvider theme={theme}>
      <SignInPage signIn={signIn} providers={providers} />
    </AppProvider>
  );
};
