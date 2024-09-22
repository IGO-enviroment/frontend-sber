import { AlertDialog } from '@/shared/ui/AlertDialog/AlertDialog';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { University } from '../../model/types/organization';
import { LoadingButton } from '@mui/lab';
import { changeOrganizationStatus } from '../../api/organizationApi';
import { toast } from 'react-toastify';

type OrganizationCardProps = {
    application: University,
}

export const UniversityCard = ({application}: OrganizationCardProps) => {
    const [changeStatus, {isLoading, isError}] = changeOrganizationStatus();

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
                Название: {application.name ?? 'ничего нет'}
            </Typography>
            <Typography variant="h5" component="div">
                ИНН: {application.inn ?? 'ничего нет'}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Название организации</Typography>
            <Typography variant="body2">
                Почта: {application.email ?? 'ничего нет'}
            </Typography>
            <Typography variant="body2">
                Огрн: {application.ogrn ?? 'ничего нет'} 
            </Typography>
            <Typography variant="body2">
                Телефон: {application.phone_number ?? 'ничего нет'}
            </Typography>
            </CardContent>
            <CardActions>
                <LoadingButton loading={isLoading} size="small" onClick={onApproveSubmit} color='success'>Утвердить</LoadingButton><LoadingButton loading={isLoading} onClick={() => setIsOpen(true)} size="small" color='error'>Отклонить</LoadingButton>
             <AlertDialog onSubmit={onRejectSubmit} toggleDialog={setIsOpen} isOpen={isOpen} ></AlertDialog>
            </CardActions>
        </Card>
    );
};

