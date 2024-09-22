import { SuccessToast } from '../../shared/components/toast/success-toast';
import { useDrawerState } from '../../shared/hooks/use-drawer';
import { useToast } from '../../shared/hooks/use-toast';
import { useGetAllPractices } from '../../shared/react-query/practices/use-get-all-practices';
import {
  Stack,
  Button,
  Box,
  Container,
  CircularProgress,
} from '@mui/material';
import { PracticeCard } from './card';
import { PracticeDrawer } from './practice-drawer';

export const Practices = () => {
  const { data, isLoading } = useGetAllPractices();

  const { isVisible, closeDrawer, openDrawer, isMounted } = useDrawerState();
  const { isVisible: isVisibleToast, closeToast } = useToast();

  console.log(data);

  if (isLoading) return <CircularProgress />

  return (
    <>
      <Container maxWidth={'xl'} sx={{p: '32px'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '30px', alignItems: 'center' }}>
          <h1>Список практик</h1>
          <Button onClick={openDrawer}>Добавить практику</Button>
        </Box>
        <Stack sx={{ gap: 5 }}>{data?.map((props) => <PracticeCard {...props} />)}</Stack>
      </Container>
      {isMounted && <PracticeDrawer closeDrawer={closeDrawer}  isVisible={isVisible} />}
      <SuccessToast isVisible={isVisibleToast} closeToast={closeToast} text={'Мероприятие успешно создано'} />
    </>
  );
};
