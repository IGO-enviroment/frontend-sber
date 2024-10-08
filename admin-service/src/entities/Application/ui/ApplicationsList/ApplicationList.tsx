import { ApplicationCard } from '../ApplicationCard/ApplicationCard';
import { Skeleton, Stack, Typography } from '@mui/material';
import { getApplicationQuery } from '../../api/applicationApi';
import { typedMemo } from '@/shared/lib/helpers/typedMemo';

export const ApplicationList = typedMemo(() => {
  const {data, isFetching} = getApplicationQuery();


    return (
      <Stack sx={{gap: 1, padding: 2}}>
        {isFetching && <>
          <Skeleton variant="rounded" height={100} />
          <Skeleton variant="rounded" height={100} />
          <Skeleton variant="rounded" height={100} />
          <Skeleton variant="rounded" height={100} />
          <Skeleton variant="rounded" height={100} />
          <Skeleton variant="rounded" height={100} />
        </>}
        {!isFetching && !data?.length && <Typography>Ничего не найдено</Typography>}
        {data?.map(application =>  <ApplicationCard key={application.id} application={application}></ApplicationCard>)}
      </Stack>
 
    );
});

