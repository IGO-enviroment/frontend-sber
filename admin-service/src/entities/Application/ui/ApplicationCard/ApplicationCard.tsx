import { AlertDialog } from '@/shared/ui/AlertDialog/AlertDialog';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { Application } from '../../model/types/application';
import { LoadingButton } from '@mui/lab';
import { changeApplicationStatus } from '../../api/applicationApi';
import { toast } from 'react-toastify';

type ApplicationCardProps = {
    application: Application,
    setState: any
}

export const ApplicationCard = ({application, setState}: ApplicationCardProps) => {
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
            setState(prev => prev.filter(item => item.id !== application.id))
            // toast.success('Практика одобрена')
            // toast.error('Что-то пошло не так')
        }
        
    }, [isError])


    return (
        <Card variant='outlined'>
            <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {application.title}
            </Typography>
            <Typography variant="h5" component="div">
                {application.description}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Компетенции</Typography>
            <Typography variant="body2">
                Компетенции: {application.competencies.join(', ')}
            </Typography>
            <Typography variant="body2">
                График работы: {application.work_schedule}
            </Typography>
            </CardContent>
            <CardActions>
               <LoadingButton loading={isLoading} size="small" onClick={onApproveSubmit} color='success'>Утвердить</LoadingButton><LoadingButton loading={isLoading} onClick={() => setIsOpen(true)} size="small" color='error'>Отклонить</LoadingButton>
             <AlertDialog onSubmit={onRejectSubmit} toggleDialog={setIsOpen} isOpen={isOpen} ></AlertDialog>
            </CardActions>
        </Card>
    );
};

