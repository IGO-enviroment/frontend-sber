import { Skeleton, Stack, Typography } from '@mui/material';
import { getUniversityQuery } from '../../api/universityApi';
import { typedMemo } from '@/shared/lib/helpers/typedMemo';
import { UniversityCard } from '../UniversityCard/UniversityCard';

export const UniversityList = typedMemo(() => {
  const {data, isFetching} = getUniversityQuery();


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
        {data?.map(application =>  <UniversityCard key={application.inn} application={application}></UniversityCard>)}
      </Stack>
 
    );
});

