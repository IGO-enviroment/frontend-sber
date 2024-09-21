import { AlertDialog } from '@/shared/ui/AlertDialog/AlertDialog';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useCallback, useState } from 'react';

export const ApplicationCard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = useCallback((message: string) => {
        console.log(message)
    }, [])




    return (
        <Card variant='outlined'>
            <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Название практики
            </Typography>
            <Typography variant="h5" component="div">
                Описание практики
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Количество человек</Typography>
            <Typography variant="body2">
               123
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color='success'>Утвердить</Button>
                <Button onClick={() => setIsOpen(true)} size="small" color='error'>Отклонить</Button>
             <AlertDialog onSubmit={onSubmit} toggleDialog={setIsOpen} isOpen={isOpen} ></AlertDialog>
            </CardActions>
        </Card>
    );
};

