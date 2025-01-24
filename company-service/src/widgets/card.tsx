import { Box, Chip, Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export interface PersonCard {
  data: any;
}

export const PersonCard = ({ data }: PersonCard) => {
  return (
    <Link to={`/practices/${data.id}`}>
      <Paper sx={{ padding: '15px 25px', borderRadius: 5 }}>
        <Stack sx={{ gap: 1 }}>
          <Typography
            variant={'h4'}>{`${data.profile_data.surname} ${data.profile_data.name} ${data.profile_data.last_name}`}</Typography>
          <Typography variant={'h4'}>{data.profile_data.email}</Typography>
          <Typography variant={'h6'}>{data.profile_data.sex}</Typography>
          <Typography variant={'subtitle1'}>{data.profile_data.birthdate?.toString()}</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1,
              }}
            >
              {data.profile_data.competencies?.map((item) => <Chip key={item} label={item} />)}
            </Box>
          </Box>
        </Stack>
      </Paper>
    </Link>
  );
};