import { useState } from 'react';

// @mui
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

// ----------------------------------------------------------------------

export default function RefundAddressDialog({ refund }: { refund?: any }) {
    console.log({ refund })
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
        <DialogTitle>Refund Address</DialogTitle>
        <DialogContent>
          <div>
              <small>Warning, Refunds Will Not Yet Be Recorded. Please Record Refunds Manually Until Automatic Refunds Are Released</small>

              <h2>Refund address:</h2>

              <h3>{refund.refund.address}</h3>
          </div>
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
