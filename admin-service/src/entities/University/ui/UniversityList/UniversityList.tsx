import { Skeleton, Stack, Typography } from '@mui/material';
import { getUniversityQuery } from '../../api/universityApi';
import { typedMemo } from '@/shared/lib/helpers/typedMemo';
import { UniversityCard } from '../UniversityCard/UniversityCard';
import { useState } from 'react';

export const UniversityList = typedMemo(() => {
  // const {data, isFetching} = getUniversityQuery();

  const data = [
  {
    "id": "uni1",
    "email": "university1@mail.com",
    "inn": "1212561090",
    "name": "УрФУ",
    "phone_number": "+7 (950) 456-1090",
    "ogrn": "231921331263"
  },
  {
    "id": "uni2",
    "email": "university2@mail.com",
    "inn": "9213312635",
    "name": "СибГИУ",
    "phone_number": "+7 (921) 213-8375",
    "ogrn": "921331263566"
  },
  {
    "id": "uni3",
    "email": "university3@mail.com",
    "inn": "3312634086",
    "name": "КемГУ",
    "phone_number": "+7 (213) 837-4086",
    "ogrn": "331263408677"
  },
  {
    "id": "uni4",
    "email": "university4@mail.com",
    "inn": "8374082957",
    "name": "НГУ",
    "phone_number": "+7 (837) 408-2957",
    "ogrn": "837408295108"
  },
  {
    "id": "uni5",
    "email": "university5@mail.com",
    "inn": "4082957710",
    "name": "КузГТУ",
    "phone_number": "+7 (408) 295-7710",
    "ogrn": "408295771099"
  },
  {
    "id": "uni6",
    "email": "university6@mail.com",
    "inn": "2957710439",
    "name": "МГУ",
    "phone_number": "+7 (295) 777-4389",
    "ogrn": "295771043900"
  }
]

const [state, setState] = useState(data)



    return (
      <Stack sx={{gap: 1, padding: 2}}>
        {/* {isFetching && <>
          <Skeleton variant="rounded" height={100} />
          <Skeleton variant="rounded" height={100} />
          <Skeleton variant="rounded" height={100} />
          <Skeleton variant="rounded" height={100} />
          <Skeleton variant="rounded" height={100} />
          <Skeleton variant="rounded" height={100} />
        </>} */}
        {/* {!isFetching && !data?.length && <Typography>Ничего не найдено</Typography>} */}
        {state?.map(application =>  <UniversityCard key={application.inn} application={application} setState={setState}></UniversityCard>)}
      </Stack>
 
    );
});

