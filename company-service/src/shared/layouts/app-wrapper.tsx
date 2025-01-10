import { Container } from '@mui/material';
import { FC, ReactNode } from 'react';

interface AppWrapperProps {
  children: ReactNode;
}

export const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return <Container sx={{flexGrow: 1}}>{children}</Container>;
};
