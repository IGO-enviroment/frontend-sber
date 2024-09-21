import { FC } from 'react';
import { AnyFunctionType } from '../shared/types';
import { Table, TableHead, TableCell, TableBody, CircularProgress } from '@mui/material';
import { PersonCard } from './card';

interface PersonListProps {
  useGetPersonList: AnyFunctionType;
}

export const PersonList: FC<PersonListProps> = ({ useGetPersonList }) => {
  const { data, isLoading } = useGetPersonList() || {};

  if (isLoading) return <CircularProgress />;

  return <>{data?.map((item: any) => <PersonCard {...item} />)}</>;
};
