import { FC } from 'react';
import { AnyFunctionType, AnyObjectType } from '../shared/types';
import { Table, TableHead, TableCell, TableBody, CircularProgress, Stack } from '@mui/material';
import { PersonCard } from './card';

interface PersonListProps {
  data: AnyObjectType[];
  isLoading: boolean
}

export const PersonList: FC<PersonListProps> = ({ data, isLoading }) => {

  if (isLoading) return <CircularProgress />;

  return <Stack sx={{gap: '20px'}}>{data?.map((item: any) => <PersonCard {...item} />)}</Stack>;
};
