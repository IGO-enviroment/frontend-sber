import { Skeleton, Stack, Typography } from '@mui/material';
import { getOrganizationQuery } from '../../api/organizationApi';
import { typedMemo } from '@/shared/lib/helpers/typedMemo';
import { UniversityCard } from '../OrganizationCard/OrganizationCard';

export const OrganizationList = typedMemo(() => {
  const {data, isFetching} = getOrganizationQuery();


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

