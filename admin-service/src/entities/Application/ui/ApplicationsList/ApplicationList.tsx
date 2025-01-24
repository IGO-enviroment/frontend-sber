import { ApplicationCard } from '../ApplicationCard/ApplicationCard';
import { Skeleton, Stack, Typography } from '@mui/material';
import { getApplicationQuery } from '../../api/applicationApi';
import { typedMemo } from '@/shared/lib/helpers/typedMemo';
import { Application } from '../../model/types/application';
import { useState } from 'react';

export const ApplicationList = typedMemo(() => {
  // const {data, isFetching} = getApplicationQuery();
  const data: Application[] = [
  {
    "id": "app1",
    "title": "Проект Инновации",
    "description": "Разработка новых технологий для улучшения производственных процессов.",
    "competencies": [
      "программирование",
      "исследование данных",
      "системный анализ"
    ],
    "work_schedule": "полный рабочий день",
    "name_organization": "Технолоджи Инк.",
    "aprove_requests_count": 2,
    "status": "approved"
  },
  {
    "id": "app2",
    "title": "Программа Маркетинг 2023",
    "description": "Создание маркетинговой стратегии для выхода на новые рынки.",
    "competencies": [
      "маркетинг",
      "аналитика",
      "коммуникации"
    ],
    "work_schedule": "неполный рабочий день",
    "name_organization": "Глобал Продактс",
    "aprove_requests_count": 1,
    "status": "pending"
  },
  {
    "id": "app3",
    "title": "Бюджетирование и контроль",
    "description": "Оптимизация финансовых потоков и контроль бюджета.",
    "competencies": [
      "финансы",
      "учет",
      "экономическое планирование"
    ],
    "work_schedule": "гибкий график",
    "name_organization": "ФинСервис",
    "aprove_requests_count": 0,
    "status": "rejected"
  },
  {
    "id": "app4",
    "title": "Кибербезопасность",
    "description": "Внедрение систем защиты данных и предотвращение кибератак.",
    "competencies": [
      "информационная безопасность",
      "криптография",
      "сетевая безопасность"
    ],
    "work_schedule": "полный рабочий день",
    "name_organization": "ИнфоПротекшн",
    "aprove_requests_count": 3,
    "status": "approved"
  }
]

const [state, setState] = useState(data)



    return (
      <Stack sx={{gap: 1, padding: 2}}>
        {state?.map(application =>  <ApplicationCard key={application.id} application={application} setState={setState}></ApplicationCard>)}
      </Stack>
 
    );
});

