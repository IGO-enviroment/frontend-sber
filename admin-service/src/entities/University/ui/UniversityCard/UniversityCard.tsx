import { AlertDialog } from '@/shared/ui/AlertDialog/AlertDialog';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { University } from '../../model/types/university';
import { LoadingButton } from '@mui/lab';
import { changeApplicationStatus } from '../../api/universityApi';
import { toast } from 'react-toastify';

type UniversityCardProps = {
    application: University,
}

export const UniversityCard = ({application}: UniversityCardProps) => {
    const [changeStatus, {isLoading, isError}] = changeApplicationStatus();

    const [isOpen, setIsOpen] = useState(false);

    const onRejectSubmit = useCallback((message: string) => {
        changeStatus({
            message,
            status: "reject",
            id: application.id,
        })
    }, [])

    const onApproveSubmit = () => {
        changeStatus({
            status: 'approve',
            id: application.id,
        })
    }

    useEffect(() => {
        if (isError) {
            toast.error('Что-то пошло не так')
        }
        
    }, [isError])


    return (
        <Card variant='outlined'>
            <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Название: {application.name ?? 'Ничего нет'}
            </Typography>
            <Typography variant="h5" component="div">
                ИНН: {application.inn ?? 'Ничего нет'}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Название организации</Typography>
            <Typography variant="body2">
                Почта: {application.email ?? 'Ничего нет'}
            </Typography>
            <Typography variant="body2">
                Огрн: {application.ogrn ?? 'ничего нет'} 
            </Typography>
            <Typography variant="body2">
                Телефон: {application.phone_number ?? 'Ничего нет'}
            </Typography>
            </CardContent>
            <CardActions>
                <LoadingButton loading={isLoading} size="small" onClick={onApproveSubmit} color='success'>Утвердить</LoadingButton><LoadingButton loading={isLoading} onClick={() => setIsOpen(true)} size="small" color='error'>Отклонить</LoadingButton>
             <AlertDialog onSubmit={onRejectSubmit} toggleDialog={setIsOpen} isOpen={isOpen} ></AlertDialog>
            </CardActions>
        </Card>
    );
};

