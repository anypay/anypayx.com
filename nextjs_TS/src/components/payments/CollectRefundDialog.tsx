import { useState } from 'react';

// @mui
import {
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
} from '@mui/material';

// ----------------------------------------------------------------------

interface Account {
    id: number;
    denomination: string;
}

export default function CollectRefundDialog({ refund }: { refund?: any }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
      setOpen(false);
  }

  return (
    <>
      <Button variant="outlined" color="warning" onClick={handleClickOpen}>
        Refund
      </Button>

      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Pay to Send Refund</DialogTitle>
        <DialogContent>
          <iframe style={{height: '500px'}} src="https://anypayx.com/app/#/invoices/NVvAGP8uG"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="inherit">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
