import { useForm } from 'react-hook-form';
import { Stack, TextField, Button, Box, Typography } from '@mui/material';
import { ControlledForm } from '../../shared/components/ControlledForm';
import { SignUpDTO, useSignUp } from '../../shared/react-query/sign-up/sign-up';
import { useValidation } from '../../shared/hooks/use-validation';
import { formSchema } from '../../shared/utils/form-schema';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import { useSignUpUni } from '../../shared/react-query/sign-up/sign-up-uni';

export const useSchema = () => {
  const validation = useValidation();

  return formSchema<SignUpDTO>({
    email: validation.requiredStringSimple,
    inn: validation.requiredStringSimple,
    name: validation.requiredStringSimple,
    phone_number: validation.requiredStringSimple,
  });
};

export const SignUpUniPage = () => {
  const schema = useSchema();
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { mutateAsync: signUp } = useSignUpUni();

  const handleSubmit = (data: SignUpDTO) => {
    signUp(data);
  };

  return (
    <Box
      sx={{
        minWidth: '600px',
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, 20%)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h3">Создание заявки</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'stretch',
          gap: 2,
          width: 1,
        }}
      >
        <ControlledForm methods={methods} onSubmit={handleSubmit}>
          <Stack sx={{gap: '16px'}}>
            <TextField sx={{ flexGrow: 1, width: 1 }}  {...methods.register('name')} label="name" variant="outlined" />
            <TextField sx={{ flexGrow: 1, width: 1 }} {...methods.register('inn')} label="inn" variant="outlined" />
            <TextField sx={{ flexGrow: 1, width: 1 }} {...methods.register('email')} label="email" variant="outlined" />
            <TextField sx={{ flexGrow: 1, width: 1 }} {...methods.register('phone_number')} label="phone_number" variant="outlined" />
          <Button type="submit">Отправить заявку</Button>
          </Stack>
        </ControlledForm>
      </Box>
    </Box>
  );
};
