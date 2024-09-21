import { memo } from 'react'
import { ApplicationCard } from '../ApplicationCard/ApplicationCard';
import { Stack } from '@mui/material';

export const ApplicationList = memo(() => {


    return (
      <Stack>
        <ApplicationCard></ApplicationCard>
        <ApplicationCard></ApplicationCard>
        <ApplicationCard></ApplicationCard>
      </Stack>
 
    );
});

