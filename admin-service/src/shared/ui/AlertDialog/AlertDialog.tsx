import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { typedMemo } from '@/shared/lib/helpers/typedMemo';

type FormDialogProps = {
  isOpen: boolean
  onSubmit: (message: string) => void,
  toggleDialog: (flag: boolean) => void,
} 

export const AlertDialog = typedMemo(({onSubmit, toggleDialog, isOpen}: FormDialogProps) => {
  const handleClose = () => {
    toggleDialog(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const formJson = Object.fromEntries((formData as any).entries());
            onSubmit(formJson?.reason ?? '');
            handleClose();
          },
        }}
      >
        <DialogTitle>Вы точно хотите отклонить?</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="reason"
            label="Причина отклонения"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          <Button type="submit">Да</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
})