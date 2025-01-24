import { FC } from 'react';
import { AnyObjectType } from '../shared/types';
import { CircularProgress, Stack } from '@mui/material';
import { PersonCard } from './card';

interface PersonListProps {
  data: AnyObjectType[];
  isLoading: boolean
}

export const PersonList: FC<PersonListProps> = ({ data, isLoading }) => {

  if (isLoading) return <CircularProgress />;

  return <Stack sx={{gap: '20px'}}>{data?.map((item: any) => <PersonCard data={item} key={item.id} />)}</Stack>;
};
