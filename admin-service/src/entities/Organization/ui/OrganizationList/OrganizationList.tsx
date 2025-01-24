import { Skeleton, Stack, Typography } from '@mui/material';
import { getOrganizationQuery } from '../../api/organizationApi';
import { typedMemo } from '@/shared/lib/helpers/typedMemo';
import { UniversityCard } from '../OrganizationCard/OrganizationCard';
import { useState } from 'react';

export const OrganizationList = typedMemo(() => {
  // const {data, isFetching} = getOrganizationQuery();

  const data =[
  {
    "id": "ad123ndkad1",
    "email": "organisation1@yandex.com",
    "inn": "1234567890",
    "name": "Stafff",
    "phone_number": "+7 (123) 456-7890",
    "ogrn": "111222333444"
  },
  {
    "id": "ad123ndkad2",
    "email": "organisation2@yandex.com",
    "inn": "2223334445",
    "name": "KKddOrg",
    "phone_number": "+7 (222) 333-4445",
    "ogrn": "222333444566"
  },
  {
    "id": "ad123ndkad3",
    "email": "organisation3@yandex.com",
    "inn": "3334445556",
    "name": "Kolizzzzz",
    "phone_number": "+7 (333) 444-5556",
    "ogrn": "333444555677"
  },
  {
    "id": "ad123ndkad4",
    "email": "organisation4@yandex.com",
    "inn": "4445556667",
    "name": "ZakKKKK",
    "phone_number": "+7 (444) 555-6667",
    "ogrn": "444555666788"
  },
  {
    "id": "ad123ndkad5",
    "email": "organisation5@yandex.com",
    "inn": "5556667778",
    "name": "Lofi",
    "phone_number": "+7 (555) 666-7778",
    "ogrn": "555666777899"
  },
  {
    "id": "ad123ndkad6",
    "email": "organisation6@yandex.com",
    "inn": "6667778889",
    "name": "II.RU",
    "phone_number": "+7 (666) 777-8889",
    "ogrn": "666777888900"
  }
]

const [state, setState]= useState(data)



    return (
      <Stack sx={{gap: 1, padding: 2}}>

        {/* {!isFetching && !data?.length && <Typography>Ничего не найдено</Typography>} */}
        {state?.map(application =>  <UniversityCard key={application.inn} application={application} setState={setState}></UniversityCard>)}
      </Stack>
 
    );
});

