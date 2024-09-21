import { memo, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useInviteMutation } from '../api/studentInvatationApi';
import { StudentInvatationFormSchema, studentInvatationFormSchema } from '../model/types/studentInvatationFormSchema';
import { LoadingButton } from '@mui/lab';
import { toast } from 'react-toastify';
import classNames from "./StudentInvatationForm.module.scss";

export const StudentInvatationForm = memo(() => {
    const [invite, { isLoading, error }] = useInviteMutation();

    const form = useForm<StudentInvatationFormSchema>({
        mode: 'onBlur',
        resolver: zodResolver(studentInvatationFormSchema),
        defaultValues: {
          students: [{
            firstName: '',
            lastName: '',
            middleName: '',
            email: '',
            phoneNumber: ''
          }]
        }
    });

    const {
        register,
        control,
        handleSubmit,
    } = form;

    const {
        fields: userFields,
        append: appendUser,
        remove: removeUser,
    } = useFieldArray({
        name: 'students',
        control,
    });

    const onCreationSubmit = async (data: StudentInvatationFormSchema) => {
        await invite({ ...data });
    };

    useEffect(() => {
      if (error) {
        toast.error('Что-то пошло не так');
      }
    }, [error])

    return (
        <Stack spacing={2} sx={{display: 'flex', justifyContent: 'center'}} p={2} >
            <form className={classNames.form}>
                <Stack spacing={2}>
                    <Stack spacing={2}>
                        <Typography>Студенты:</Typography>
                        {userFields.map((field, index) => (
                            <Stack
                                sx={theme => ({
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: theme.palette.primary.main,
                                    padding: '8px',
                                    borderRadius: '8px',
                                    gap: '4px',
                                })}
                                key={field.id}
                            >
                                <TextField label="Имя" {...register(`students.${index}.firstName` as const)} />
                                <TextField label="Почта" {...register(`students.${index}.email` as const)} />
                                <TextField label="Фамилия" {...register(`students.${index}.lastName` as const)} />
                                <TextField label="Отчество" {...register(`students.${index}.middleName` as const)} />
                                <TextField label="Телефон" {...register(`students.${index}.phoneNumber` as const)} />
                               

                                <Button color="error" type="button" onClick={() => removeUser(index)}>
                                    Удалить
                                </Button>
                            </Stack>
                        ))}
                        <Button
                            color="success"
                            variant="outlined"
                            type="button"
                            onClick={() =>
                                appendUser({
                                    email: '',
                                    firstName: '',
                                    lastName: '',
                                    middleName: '',
                                    phoneNumber: ''
                                })
                            }
                        >
                            Добавить студента
                        </Button>
                    </Stack>
                </Stack>
            </form>
            <Stack direction="row" justifyContent="center" spacing={2}>
                <LoadingButton loading={isLoading} onClick={handleSubmit(onCreationSubmit)} variant="contained">
                    Отправить приглашения
                </LoadingButton>
            </Stack>
        </Stack>
    );
});